import React from "react";
import { DayPicker, type Range } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addDays, isAfter, isBefore } from "date-fns";

type Props = {
  checkIn?: Date | undefined;
  checkOut?: Date | undefined;
  onChange: (range: { from?: Date; to?: Date }) => void;
};

export default function MobileDateRangePicker({ checkIn, checkOut, onChange }: Props) {
  const today = React.useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [active, setActive] = React.useState<'checkin' | 'checkout'>('checkin');

  const handleSelect = (r?: Range | Date) => {
    if (!r) return onChange({});
    // If a single Date selected, behave based on active field
    if (r instanceof Date) {
      if (active === 'checkin') {
        // if picking check-in that is after current check-out, clear check-out
        if (checkOut && isAfter(r, checkOut)) {
          onChange({ from: r });
        } else {
          onChange({ from: r, to: checkOut });
        }
        setActive('checkout');
      } else {
        // active checkout
        if (checkIn && isBefore(r, checkIn)) {
          // selected earlier than check-in — treat it as new check-in
          onChange({ from: r });
          setActive('checkout');
        } else {
          onChange({ from: checkIn, to: r });
        }
      }
      return;
    }

    const range = r as Range;
    onChange({ from: range.from, to: range.to });
    // if user finished with to, set active to checkout; else focus checkout
    if (range.to) setActive('checkout');
  };

  const clearCheckIn = () => onChange({ to: checkOut });
  const clearCheckOut = () => onChange({ from: checkIn });
  const clearAll = () => onChange({});

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex gap-3 mb-3">
        <button
          type="button"
          onClick={() => setActive('checkin')}
          className={`flex-1 py-3 rounded-lg border text-left px-3 transition-colors ${
            active === 'checkin' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'
          }`}
          aria-pressed={active === 'checkin'}
        >
          <div className="text-xs text-muted-foreground">Check-in</div>
          <div className={`font-medium ${checkIn ? 'text-indigo-700' : 'text-gray-800'}`}>
            {checkIn ? checkIn.toLocaleDateString() : 'Select'}
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActive('checkout')}
          className={`flex-1 py-3 rounded-lg border text-left px-3 transition-colors ${
            active === 'checkout' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'
          }`}
          aria-pressed={active === 'checkout'}
        >
          <div className="text-xs text-muted-foreground">Check-out</div>
          <div className={`font-medium ${checkOut ? 'text-indigo-700' : 'text-gray-800'}`}>
            {checkOut ? checkOut.toLocaleDateString() : 'Select'}
          </div>
        </button>
      </div>

      <div className="mb-3">
        <DayPicker
          mode="range"
          onSelect={handleSelect}
          selected={{ from: checkIn, to: checkOut }}
          disabled={{ before: today }}
          numberOfMonths={1}
          fromMonth={checkIn || today}
          captionLayout="buttons"
          className="react-day-picker--mobile"
          // Use modifier class names so Tailwind can pick them up
          modifiersClassNames={{
            selected: 'rdp-selected',
            range_start: 'rdp-range-start',
            range_end: 'rdp-range-end',
            range_middle: 'rdp-range-middle',
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button type="button" onClick={clearCheckIn} className="text-sm text-indigo-600 underline">
            Clear check-in
          </button>
          <button type="button" onClick={clearCheckOut} className="text-sm text-indigo-600 underline">
            Clear check-out
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-muted-foreground">Tap dates to select a range</div>
          <button type="button" onClick={clearAll} className="text-sm text-indigo-600">
            Clear all
          </button>
        </div>
      </div>

      {/* Inline styles for react-day-picker modifiers using Tailwind style classes */}
      <style>{`
        .rdp-selected { background-color: #4f46e5 !important; color: white !important; border-radius: 9999px; }
        .rdp-range-start, .rdp-range-end { background-color: #4f46e5 !important; color: white !important; }
        .rdp-range-middle { background-color: #eef2ff !important; }
        .react-day-picker--mobile .rdp-day { min-width: 44px; min-height: 44px; }
      `}</style>
    </div>
  );
}
