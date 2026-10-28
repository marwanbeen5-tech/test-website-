import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { comparison, site } from "@/lib/site";

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Icon name="check" className="mx-auto h-5 w-5 text-emerald-500" />
    ) : (
      <Icon name="x" className="mx-auto h-5 w-5 text-red-500" />
    );
  }
  return <span className={highlight ? "font-bold" : "text-muted"}>{value}</span>;
}

export default function Comparison() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <SectionHeading
        eyebrow="Comparação"
        title="IPTV vs TV por Cabo"
        text="Mais canais, mais qualidade e sem fidelização, por uma fração do preço."
      />
      <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="p-4 text-left font-semibold text-muted">Funcionalidade</th>
              <th className="p-4 text-center">
                <span className="text-gradient font-extrabold">{site.name}</span>
              </th>
              <th className="p-4 text-center font-semibold text-muted">TV por Cabo / Satélite</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.label} className="border-b border-border last:border-0">
                <td className="p-4">{row.label}</td>
                <td className="bg-brand/5 p-4 text-center">
                  <Cell value={row.us} highlight />
                </td>
                <td className="p-4 text-center">
                  <Cell value={row.them} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
