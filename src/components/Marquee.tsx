// Infinite horizontal scroll. Children are rendered twice so the loop is seamless; pauses on hover.
export default function Marquee({
  children,
  duration = 40,
  reverse = false,
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`marquee ${reverse ? "marquee-reverse" : ""}`}
        style={{ "--duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 gap-6 py-3 pr-6">{children}</div>
        <div className="flex shrink-0 gap-6 py-3 pr-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
