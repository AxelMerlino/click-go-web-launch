import heroImg from "@/assets/hero-lifestyle.jpg";
import iconClick from "@/assets/icon-click.jpg";
import { ArrowRight, Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
      <div className="container-narrow relative grid lg:grid-cols-2 gap-12 py-16 lg:py-24 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Temperley · Lomas de Zamora
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Lo útil <span className="text-accent">en un click</span>.
          </h1>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-lg">
            Mochilas, joyeros, carteras y accesorios pensados para tu día a día.
            Calidad, variedad y precios accesibles. Venta minorista y mayorista con envíos a todo el país.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#productos"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-accent hover:opacity-90 transition-smooth"
            >
              Ver productos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.instagram.com/clickandgo.tienda"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
            >
              <Instagram className="h-4 w-4" />
              @clickandgo.tienda
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "+500", v: "Productos" },
              { k: "24h", v: "Respuesta" },
              { k: "País", v: "Envíos" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-bold text-accent">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-primary-foreground/70">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 hidden md:block animate-float">
            <img src={iconClick} alt="" className="h-20 w-20 rounded-2xl shadow-elegant" />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-primary-foreground/10">
            <img
              src={heroImg}
              alt="Mujer joven con mochila y cartera Click & Go en Temperley"
              className="w-full h-[420px] lg:h-[560px] object-cover"
              width={1280}
              height={1280}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card text-foreground rounded-2xl p-4 shadow-elegant max-w-[220px]">
            <p className="text-xs font-semibold text-accent">NUEVA TEMPORADA</p>
            <p className="text-sm font-medium mt-1">Diseños clásicos en colores neutros</p>
          </div>
        </div>
      </div>
    </section>
  );
};
