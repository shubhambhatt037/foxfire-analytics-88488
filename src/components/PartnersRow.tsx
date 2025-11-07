export const PartnersRow = () => {
  const partners = [
    { name: "Zerodha", logo: "/assets/logos/zerodha.svg" },
    { name: "Groww", logo: "/assets/logos/groww.svg" },
    { name: "Angel One", logo: "/assets/logos/angel-one.svg" },
    { name: "Upstox", logo: "/assets/logos/upstox.svg" },
  ];

  return (
    <section className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm partners">
      <div className="container mx-auto px-8 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-muted-foreground">
            Powering traders and funds in India
          </p>
          <div className="flex items-center gap-8 lg:gap-12 flex-wrap justify-center">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="partner grayscale hover:grayscale-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
