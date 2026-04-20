import logoHorizontal from "@/assets/logo-horizontal.jpg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#productos", label: "Productos" },
  { href: "#mayoristas", label: "Mayoristas" },
  { href: "#local", label: "Local" },
  { href: "#envios", label: "Envíos y pagos" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container-narrow flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logoHorizontal} alt="Click & Go logo" className="h-10 w-auto rounded-md" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-accent transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-accent hover:opacity-90 transition-smooth"
        >
          Hacé tu pedido
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menú">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-narrow py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="rounded-full bg-gradient-accent px-5 py-2.5 text-center text-sm font-semibold text-accent-foreground">
              Hacé tu pedido
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
