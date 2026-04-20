import { CreditCard, Store, Truck, Wallet } from "lucide-react";

const items = [
  { icon: Truck, title: "Envíos a todo el país", desc: "Coordinamos por correo o moto-mensajería en CABA y GBA." },
  { icon: Store, title: "Retiro en Temperley", desc: "Pasá por el local sin costo adicional." },
  { icon: CreditCard, title: "Tarjetas y cuotas", desc: "Hasta 3 cuotas sin interés (consultar promociones)." },
  { icon: Wallet, title: "Mercado Pago / Transferencia", desc: "Aceptamos los medios más usados." },
];

export const Shipping = () => {
  return (
    <section id="envios" className="py-20 lg:py-28">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Envíos y pagos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary">
            Comprar es facilísimo
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Elegí cómo querés recibir tu pedido y pagar. Te ayudamos en cada paso.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-card p-6 shadow-soft hover:shadow-elegant transition-smooth border border-border/60">
              <div className="h-12 w-12 rounded-xl bg-gradient-accent text-accent-foreground flex items-center justify-center shadow-accent">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-primary">{i.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
