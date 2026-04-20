import mochila from "@/assets/product-mochila.jpg";
import joyero from "@/assets/product-joyero.jpg";
import cartera from "@/assets/product-cartera.jpg";
import accesorios from "@/assets/product-accesorios.jpg";
import { MessageCircle } from "lucide-react";

const products = [
  { img: mochila, name: "Mochilas", desc: "Cómodas, modernas y resistentes para el día a día.", price: "Desde $—" },
  { img: cartera, name: "Carteras", desc: "Tote, bandoleras y clásicas en variedad de colores.", price: "Desde $—" },
  { img: joyero, name: "Joyeros", desc: "Organizá tus accesorios con estilo. Ideal para regalo.", price: "Desde $—" },
  { img: accesorios, name: "Accesorios", desc: "Lentes, billeteras, scrunchies y mucho más.", price: "Desde $—" },
];

const WHATSAPP = "https://wa.me/5491100000000?text=Hola%20Click%20%26%20Go!%20Quiero%20consultar%20por%20";

export const Products = () => {
  return (
    <section id="productos" className="py-20 lg:py-28">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Catálogo</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary">
            Productos que combinan con tu estilo
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Renovamos novedades cada semana. Elegí tu favorito y consultanos por WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-3xl bg-card overflow-hidden shadow-soft hover:shadow-elegant transition-smooth"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-primary">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">{p.price}</span>
                  <a
                    href={`${WHATSAPP}${encodeURIComponent(p.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary-glow transition-smooth"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Consultar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
