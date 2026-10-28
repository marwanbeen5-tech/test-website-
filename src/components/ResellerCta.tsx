import Link from "next/link";
import Reveal from "./Reveal";

export default function ResellerCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <Reveal variant="zoom">
        <div className="bg-animated relative overflow-hidden rounded-3xl px-8 py-16 text-center">
          <div className="animate-blob pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div
            className="animate-blob pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-black/20 blur-3xl"
            style={{ animationDelay: "-8s" }}
          />
          <div className="relative">
            <h2 className="text-3xl font-extrabold md:text-4xl">Torne-se um Revendedor</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Comece o seu próprio negócio de IPTV com o nosso programa de revenda. Obtenha acesso exclusivo ao
              painel, preços competitivos e suporte dedicado para fazer crescer o seu negócio.
            </p>
            <Link
              href="/revenda"
              className="btn-shine mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Planos de Revenda →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
