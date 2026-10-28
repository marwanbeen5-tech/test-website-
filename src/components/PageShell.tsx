export default function PageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-80" />
      <div className="animate-blob pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-brand/25 blur-[110px]" />
      <div className="relative mx-auto max-w-4xl px-4 py-20">
        <h1 className="animate-fade-up text-4xl font-extrabold md:text-5xl">
          <span className="text-gradient">{title}</span>
        </h1>
        {intro && (
          <p className="animate-fade-up mt-4 text-lg text-muted" style={{ animationDelay: "0.1s" }}>
            {intro}
          </p>
        )}
        <div
          className="animate-fade-up mt-10 space-y-6 leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-fg"
          style={{ animationDelay: "0.2s" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
