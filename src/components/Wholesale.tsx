import { Check, Package, Truck, Users } from "lucide-react";

const benefits = [
  { icon: Package, title: "Precios mayoristas", desc: "Tarifas especiales por compra en volumen." },
  { icon: Truck, title: "Envíos a todo el país", desc: "Coordinamos despacho a tu ciudad." },
  { icon: Users, title: "Para feriantes y emprendedores", desc: "Ideal para revender en tu local o redes." },
];

export const Wholesale = () => {
  return (
    <section id="mayoristas" className="py-20 lg:py-28 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_30%,white,transparent_50%)]" />
      <div className="container-narrow relative grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Mayoristas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Sumate a nuestra red de revendedores
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            ¿Querés vender en tu negocio, feria o emprendimiento? Te damos precios especiales y catálogo actualizado.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Catálogo mayorista actualizado mensualmente",
              "Pedido mínimo accesible",
              "Atención personalizada por WhatsApp",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-primary-foreground/90">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <form
          className="lg:col-span-3 rounded-3xl bg-card text-card-foreground p-8 shadow-elegant space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const msg = `Hola! Quiero info mayorista.%0ANombre: ${data.get("nombre")}%0ARubro: ${data.get("rubro")}%0AWhatsApp: ${data.get("wa")}%0APedido estimado: ${data.get("pedido")}`;
            window.open(`https://wa.me/5491100000000?text=${msg}`, "_blank");
          }}
        >
          <h3 className="text-xl font-bold text-primary">Solicitá el catálogo mayorista</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="nombre" required placeholder="Nombre" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            <input name="rubro" required placeholder="Rubro (feria, local, IG...)" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            <input name="wa" required placeholder="WhatsApp" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            <input name="pedido" placeholder="Pedido estimado" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <button type="submit" className="w-full rounded-full bg-gradient-accent py-3.5 text-sm font-semibold text-accent-foreground shadow-accent hover:opacity-90 transition-smooth">
            Enviar consulta por WhatsApp
          </button>
        </form>
      </div>

      <div className="container-narrow relative mt-16 grid sm:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 backdrop-blur">
            <div className="h-11 w-11 rounded-xl bg-accent/20 text-accent flex items-center justify-center">
              <b.icon className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-bold">{b.title}</h4>
            <p className="text-sm text-primary-foreground/70 mt-1">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
