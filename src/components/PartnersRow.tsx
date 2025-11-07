export const PartnersRow = () => {
  const partners = [
    { name: "Stripe", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=40&fit=crop&q=80" },
    { name: "NVIDIA", logo: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=120&h=40&fit=crop&q=80" },
    { name: "Snowflake", logo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=120&h=40&fit=crop&q=80" },
    { name: "Databricks", logo: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=120&h=40&fit=crop&q=80" },
  ];

  return (
    <section className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-8 lg:px-24 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-muted-foreground">
            Powering traders and funds in India
          </p>
          <div className="flex items-center gap-8 lg:gap-12 flex-wrap justify-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
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
