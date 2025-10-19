import * as React from "react";
import { format, isAfter, isBefore, differenceInCalendarDays, addDays, addMonths, subMonths } from "date-fns";
import { DayPicker } from "react-day-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER } from "@/lib/constants";
import MobileDateRangePicker from "@/components/MobileDateRangePicker";

const fmt = (d?: Date) => (d ? format(d, "dd MMM yyyy") : "");

type Props = {
  /** Text shown on the CTA that opens the calendar */
  triggerText?: string;
  /** Optional: pass your own trigger node (keeps existing styling) */
  trigger?: React.ReactNode;
  /** Optional: add a note line in the WA message */
  note?: string;
  /** Optional: set full width button */
  fullWidth?: boolean;
};

export default function WhatsAppDateDialog({
  triggerText = "Book on WhatsApp",
  trigger,
  note,
  fullWidth,
}: Props) {
  const [open, setOpen] = React.useState(false);
  // step flow: checkin -> checkout -> guests
  const [step, setStep] = React.useState<'checkin' | 'checkout' | 'guests'>('checkin');
  const [checkIn, setCheckIn] = React.useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = React.useState<Date | undefined>(undefined);
  const [adults, setAdults] = React.useState<number>(2);
  const [children, setChildren] = React.useState<number>(0);
  // displayedMonth controls which month the calendar shows (useful for checkout)
  const [displayedMonth, setDisplayedMonth] = React.useState<Date | undefined>(undefined);
  const [monthsToShow, setMonthsToShow] = React.useState<number>(1);
  // accessibility refs
  const checkinNextRef = React.useRef<HTMLButtonElement | null>(null);
  const checkoutBackRef = React.useRef<HTMLButtonElement | null>(null);
  const checkoutNextRef = React.useRef<HTMLButtonElement | null>(null);
  const sendRef = React.useRef<HTMLButtonElement | null>(null);
  const minusRef = React.useRef<HTMLButtonElement | null>(null);
  const plusRef = React.useRef<HTMLButtonElement | null>(null);

  const today = React.useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // responsive months to show (1 on mobile, 2 on larger screens)
  React.useEffect(() => {
    const update = () => setMonthsToShow(window.innerWidth < 640 ? 1 : 2);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // when dialog opens or checkIn changes, align displayed month to checkIn or today
  React.useEffect(() => {
    if (!open) return;
    setDisplayedMonth(checkIn ?? today);
  }, [open, checkIn, today]);

  const nights = checkIn && checkOut ? Math.max(1, differenceInCalendarDays(checkOut, checkIn)) : 0;

  const validCheckIn = !!checkIn && !isBefore(checkIn, today);
  const validCheckOut = !!checkOut && !!checkIn && isAfter(checkOut, checkIn);

  const handleSend = () => {
    const WAPP_NUMBER = PHONE_NUMBER;
    if (!validCheckIn || !validCheckOut || !WAPP_NUMBER) return;

    const lines = [
      `Hi, I’d like to book a stay at Homlee Ayodhya from ${fmt(checkIn)} to ${fmt(checkOut)} for ${adults} adults, ${children} children. Please share availability.`,
      note ? `Notes: ${note}` : undefined,
    ].filter(Boolean);

    const url = `https://wa.me/${WAPP_NUMBER}?text=${encodeURIComponent(lines.join(" "))}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
    // reset to defaults for next open
    setTimeout(() => {
      setStep('checkin');
      setCheckIn(undefined);
      setCheckOut(undefined);
      setAdults(2);
      setChildren(0);
    }, 200);
  };

  const TriggerNode = trigger ?? <Button className={fullWidth ? 'w-full' : undefined}>{triggerText}</Button>;

  // focus management when dialog opens / step changes
  React.useEffect(() => {
    if (!open) return;
    // small delay to ensure DOM is updated
    setTimeout(() => {
      if (step === 'checkin') {
        checkinNextRef.current?.focus();
      } else if (step === 'checkout') {
        checkoutBackRef.current?.focus();
      } else if (step === 'guests') {
        sendRef.current?.focus();
      }
    }, 50);
  }, [open, step]);


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {TriggerNode}
      </DialogTrigger>

      <DialogContent className="max-w-[720px]">
        <DialogHeader>
          <DialogTitle>Select your stay</DialogTitle>
          <DialogDescription>Choose check-in and check-out dates. Past dates are disabled.</DialogDescription>
        </DialogHeader>

        {/* small progress bar */}
        <div className="mx-6 mt-2">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-1 bg-primary"
              style={{ width: step === 'checkin' ? '33%' : step === 'checkout' ? '66%' : '100%', transition: 'width 200ms ease' }}
              aria-hidden
            />
          </div>
        </div>

        <div className="grid gap-3">
          {/* Mobile optimized picker */}
          <div className="md:hidden">
            <MobileDateRangePicker
              checkIn={checkIn}
              checkOut={checkOut}
              onChange={(r) => {
                if (r.from) setCheckIn(r.from);
                else setCheckIn(undefined);
                if (r.to) setCheckOut(r.to);
                else setCheckOut(undefined);
              }}
            />
          </div>
          <noscript>
            <div className="p-4 bg-yellow-50 rounded border">JavaScript is required to use the interactive date picker. Please call us at <a href={`tel:+${PHONE_NUMBER}`} className="underline">+{PHONE_NUMBER}</a> to book.</div>
          </noscript>

          {/* Mobile sticky nav: Next/Back (sticky at bottom on small screens) */}
          <div className="md:hidden fixed left-0 right-0 bottom-4 px-4 pointer-events-none">
            <div className="mx-auto max-w-3xl flex gap-3 justify-end pointer-events-auto">
              {step !== 'checkin' && (
                <Button variant="outline" className="px-6 py-3" onClick={() => setStep((s) => (s === 'checkout' ? 'checkin' : 'checkout'))}>Back</Button>
              )}
              <Button className="px-6 py-3 bg-primary text-white" onClick={() => {
                if (step === 'checkin') { setDisplayedMonth(checkIn ?? today); setStep('checkout'); }
                else if (step === 'checkout') setStep('guests');
                else if (step === 'guests') handleSend();
              }}>{step === 'guests' ? 'Confirm on WhatsApp' : 'Next'}</Button>
            </div>
          </div>
          {step === 'checkin' && (
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Step 1 of 3 — Select check-in</p>
                <div className="text-sm text-muted-foreground">{checkIn ? fmt(checkIn) : 'No date selected'}</div>
              </div>
              <DayPicker
                mode="single"
                selected={checkIn}
                onSelect={(d) => setCheckIn(d ?? undefined)}
                numberOfMonths={monthsToShow}
                disabled={[{ before: today }]}
                weekStartsOn={1}
                captionLayout="buttons"
                month={displayedMonth}
                onMonthChange={(m) => setDisplayedMonth(m)}
                styles={{ month: { width: '100%' }, day: { minWidth: '44px', minHeight: '44px' } }}
              />

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm">Selected:</span>
                  <div className="px-3 py-1 rounded bg-muted text-sm">{checkIn ? fmt(checkIn) : '—'}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => { setCheckIn(undefined); }} aria-label="Clear check-in date">
                    Clear
                  </Button>
                  <Button ref={checkinNextRef} onClick={() => {
                    // when moving to checkout, make calendar show check-in month
                    setDisplayedMonth(checkIn ?? today);
                    setStep('checkout');
                  }} disabled={!validCheckIn} aria-label="Next to check-out">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 'checkout' && (
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Step 2 — Select check-out</p>
                <div className="flex items-center gap-3">
                  <div className="text-sm text-muted-foreground">Check-in: {checkIn ? fmt(checkIn) : '—'}</div>
                  <Button ref={checkoutBackRef} variant="ghost" size="sm" onClick={() => setStep('checkin')} aria-label="Back to check-in">Back</Button>
                </div>
              </div>

              <DayPicker
                mode="range"
                selected={checkIn && checkOut ? { from: checkIn, to: checkOut } : checkIn ? { from: checkIn } : undefined}
                onSelect={(range) => {
                  // on range select, range can be Date | Range
                  if (!range) return;
                  // if user picks a single date (as Date), we set as checkOut when valid
                  if (range instanceof Date) {
                    const selected = range;
                    if (checkIn && isAfter(selected, checkIn)) {
                      setCheckOut(selected);
                      setTimeout(() => setStep('guests'), 150);
                    } else {
                      setCheckIn(selected);
                      setCheckOut(undefined);
                      setStep('checkin');
                    }
                    return;
                  }
                  // range object
                  const r = range as { from?: Date; to?: Date };
                  if (r.from) setCheckIn(r.from);
                  if (r.to) {
                    setCheckOut(r.to);
                    setTimeout(() => setStep('guests'), 150);
                  }
                }}
                numberOfMonths={monthsToShow}
                month={displayedMonth}
                disabled={checkIn ? [{ before: addDays(checkIn, 1) }] : [{ before: today }]}
                weekStartsOn={1}
                captionLayout="buttons"
                onMonthChange={(m) => setDisplayedMonth(m)}
                styles={{ month: { width: '100%' }, day: { minWidth: '44px', minHeight: '44px' } }}
                modifiers={{ selected: (checkIn ? checkIn : undefined), range_middle: (checkIn && checkOut ? { from: checkIn, to: checkOut } : undefined) }}
                modifiersStyles={{ selected: { backgroundColor: '#0f172a', color: 'white' }, range_middle: { backgroundColor: '#e6eef6' } }}
              />

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm">Selected:</span>
                  <div className="px-3 py-1 rounded bg-muted text-sm">{checkIn ? fmt(checkIn) : '—'}</div>
                  <div className="px-3 py-1 rounded bg-muted text-sm">{checkOut ? fmt(checkOut) : '—'}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => { setCheckOut(undefined); }} aria-label="Clear check-out">
                    Clear
                  </Button>
                  <Button ref={checkoutNextRef} onClick={() => setStep('guests')} disabled={!validCheckOut} aria-label="Next to guests">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 'guests' && (
            <div>
              <h4 className="text-sm font-semibold">Guest details</h4>
              <p className="text-sm text-muted-foreground">Choose how many adults and children will stay.</p>

              <div className="mt-4 grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Adults</div>
                    <div className="text-xs text-muted-foreground">Age 12+</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button aria-label="Decrease adults" onClick={() => setAdults(a => Math.max(1, a-1))} variant="outline">−</Button>
                    <div className="px-4 py-2 border rounded text-lg">{adults}</div>
                    <Button aria-label="Increase adults" onClick={() => setAdults(a => Math.min(6, a+1))} variant="outline">+</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Children</div>
                    <div className="text-xs text-muted-foreground">Age 0–11</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button aria-label="Decrease children" onClick={() => setChildren(c => Math.max(0, c-1))} variant="outline">−</Button>
                    <div className="px-4 py-2 border rounded text-lg">{children}</div>
                    <Button aria-label="Increase children" onClick={() => setChildren(c => Math.min(6, c+1))} variant="outline">+</Button>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="ghost" onClick={() => setStep('checkout')} aria-label="Back to checkout">Back</Button>
                  <Button ref={sendRef} onClick={handleSend} disabled={!validCheckOut} aria-label="Confirm on WhatsApp" className="bg-primary text-white">
                    Confirm on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}

        </div>

        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}
