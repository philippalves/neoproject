import { Marquee } from "@/components/scroller";

const messages = [
  "FM: Seachios® Marine Services",
  "24/7 Operations Desk — ops@seachiosplaceholder.com",
  "+55 (13) 0000-0000",
  "Port coverage: Santos · Itaqui · Vila do Conde · Cabedelo · Rio Grande · Vitória",
];

export function ScrollingStrip() {
  return (
    <div className="border-b border-blue-900 bg-slate-950 text-blue-100">
      <Marquee>
        {messages.map((message) => (
          <span key={message} className="mx-6 text-xs uppercase tracking-[0.35em]">
            {message}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
