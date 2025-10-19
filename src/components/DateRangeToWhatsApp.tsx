import * as React from "react";
import { format, isAfter, isBefore, differenceInCalendarDays } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

const WAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER as string;

// Format like "18 Oct 2025"
const fmt = (d?: Date) => (d ? format(d, "dd MMM yyyy") : "");

export default function DateRangeToWhatsApp() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const today = React.useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // Block past dates
  const disabledDays = [{ before: today }];

  const nights =
    range?.from && range?.to
      ? Math.max(1, differenceInCalendarDays(range.to, range.from))
      : 0;

  const validRange =
    !!range?.from &&
    !!range?.to &&
    isAfter(range.to, range.from) &&
    !isBefore(range.from, today);

  const onSend = () => {
    if (!validRange || !WAPP_NUMBER) return;

    const msgLines = [
      `Hello! I'd like to book at Homlee Ayodhya.`,
      `Check-in: ${fmt(range?.from)}`,
      `Check-out: ${fmt(range?.to)}`,
      `Nights: ${nights}`,
      `Guests: (please specify)`,
      `Room type: (if any preference)`,
    ];

    const msg = encodeURIComponent(msgLines.join("\n"));
    const url = `https://wa.me/${WAPP_NUMBER}?text=${msg}`;
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        maxWidth: 720,
        width: "100%",
        margin: "0 auto",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: 16,
      }}
    >
      <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
        Select your stay
      </h2>

      <p style={{ margin: "8px 0 16px", color: "#6b7280" }}>
        Choose check-in and check-out dates. Past dates are disabled.
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          disabled={disabledDays}
          weekStartsOn={1}
          captionLayout="dropdown-buttons"
          styles={{
            months: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            },
            month: { width: "100%" },
          }}
          modifiersStyles={{
            selected: { backgroundColor: "#111827", color: "white" },
            range_middle: { backgroundColor: "#e5e7eb" },
          }}
        />

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "#374151", fontSize: 14 }}>
            {range?.from && range?.to ? (
              <>
                {fmt(range.from)} — {fmt(range.to)}{" "}
                <span style={{ color: "#6b7280" }}>
                  ({nights} night{nights === 1 ? "" : "s"})
                </span>
              </>
            ) : range?.from ? (
              <>Check-in: {fmt(range.from)}</>
            ) : (
              <>Pick check-in and check-out.</>
            )}
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button
              type="button"
              onClick={() => setRange(undefined)}
              style={{
                height: 40,
                padding: "0 14px",
                borderRadius: 10,
                border: "1px solid #e5e7eb",
                background: "white",
                cursor: "pointer",
              }}
            >
              Clear
            </button>

            <button
              type="button"
              onClick={onSend}
              disabled={!validRange}
              style={{
                height: 40,
                padding: "0 14px",
                borderRadius: 10,
                border: "1px solid transparent",
                background: validRange ? "#111827" : "#9ca3af",
                color: "white",
                cursor: validRange ? "pointer" : "not-allowed",
              }}
            >
              Send dates on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
