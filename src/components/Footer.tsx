import logo from "@/assets/logo-horizontal.jpg";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground/80 border-t border-primary-foreground/10">
    <div className="container-narrow py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Click & Go" className="h-9 w-auto rounded" />
        <p className="text-sm">© {new Date().getFullYear()} Click & Go · Lo útil en un click</p>
      </div>
      <p className="text-xs text-primary-foreground/60">
        Temperley, Lomas de Zamora — Buenos Aires, Argentina
      </p>
    </div>
  </footer>
);
