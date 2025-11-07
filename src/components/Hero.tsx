import { Button } from "./ui/button";
import { FoxIcon } from "./FoxIcon";
import heroImage from "@/assets/hero-background.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover parallax-element"
          data-speed="0.3"
        />
      </div>

      {/* Left Overlay Fade */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-8 lg:px-24 py-32">
        <div className="max-w-2xl fade-in">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 hero-heading glitch-text"
            data-text="Smarter Investing Starts Here"
          >
            Smarter Investing Starts Here
          </h1>

          <p className="text-lg md:text-xl hero-sub mb-8 max-w-xl">
            Stay ahead with real-time insights, portfolio tracking, and research tools built for{" "}
            <span className="text-secondary font-medium">NSE & BSE traders</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="btn-primary group">
              <FoxIcon className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
