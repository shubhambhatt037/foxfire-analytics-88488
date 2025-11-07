import { Button } from "./ui/button";
import { FoxIcon } from "./FoxIcon";
import heroImage from "@/assets/hero-background.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-8 lg:px-24 py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-foreground">AI-powered financial assistant for the </span>
            <span className="text-primary">Indian stock market</span>
          </h1>

          <p className="text-lg md:text-xl text-muted mb-8 max-w-xl">
            Specialized agents for research, portfolio management, and real-time alerts — built for{" "}
            <span className="text-secondary font-medium">NSE & BSE</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="group">
              <FoxIcon className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
