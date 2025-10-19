import DateRangeToWhatsApp from "../components/DateRangeToWhatsApp";

export default function Book() {
  return (
    <main style={{ padding: 16 }}>
      <h1 style={{ fontSize: 24, margin: "0 0 12px" }}>Book your stay</h1>
      <DateRangeToWhatsApp />
    </main>
  );
}
