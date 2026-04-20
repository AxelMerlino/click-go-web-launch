import logo from "@/assets/logo-horizontal.jpg";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img src={logo} alt="Click & Go" className="h-14 w-auto rounded-lg" />
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Hablemos. <span className="text-accent">Tu pedido</span> está a un click.
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg max-w-md">
            Respondemos consultas, armamos pedidos personalizados y atendemos mayoristas todos los días.
          </p>
          <div className="mt-8 space-y-4">
            <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-smooth">
              <MessageCircle className="h-5 w-5 text-accent" /> WhatsApp +54 9 11 0000-0000
            </a>
            <a href="https://www.instagram.com/clickandgo.tienda" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-smooth">
              <Instagram className="h-5 w-5 text-accent" /> @clickandgo.tienda
            </a>
            <p className="flex items-center gap-3 text-primary-foreground/90">
              <MapPin className="h-5 w-5 text-accent" /> Temperley, Lomas de Zamora — Argentina
            </p>
            <a href="mailto:hola@clickandgo.com.ar" className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent transition-smooth">
              <Mail className="h-5 w-5 text-accent" /> hola@clickandgo.com.ar
            </a>
          </div>
        </div>

        <form
          className="rounded-3xl bg-card text-card-foreground p-8 shadow-elegant space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget as HTMLFormElement);
            const msg = `Hola Click & Go!%0ANombre: ${data.get("n")}%0AEmail: ${data.get("e")}%0AConsulta: ${data.get("m")}`;
            window.open(`https://wa.me/5491100000000?text=${msg}`, "_blank");
          }}
        >
          <h3 className="text-xl font-bold text-primary">Enviános tu consulta</h3>
          <input name="n" required placeholder="Nombre" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
          <input name="e" type="email" required placeholder="Email" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
          <textarea name="m" required rows={4} placeholder="¿En qué te ayudamos?" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
          <button type="submit" className="w-full rounded-full bg-gradient-accent py-3.5 text-sm font-semibold text-accent-foreground shadow-accent hover:opacity-90 transition-smooth">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
