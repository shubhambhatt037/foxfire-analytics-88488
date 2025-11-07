import { Button } from "./ui/button";
import { FoxIcon } from "./FoxIcon";
import heroImage from "@/assets/hero-background.png";

export const Hero = () => {
  return (
    <section className="hero-section">
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

      {/* Hero Content Container */}
      <div className="hero-content-wrapper">
        {/* Main Content */}
        <div className="hero-main-content fade-in">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 hero-heading glitch-text"
            data-text="Smarter Investing Starts Here"
          >
            Smarter Investing<br />Starts Here
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

        {/* Partner Logo Strip */}
        <div className="hero-partners-strip" role="region" aria-label="Trusted broker partners">
          <p className="hero-partners-label">
            Powering traders at <br /> leading Indian brokers
          </p>
          <div className="hero-partners-logos">
            <a href="https://zerodha.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Zerodha" className="hero-partner-link">
              <img
                src="/logos/zerodha.svg"
                alt="Zerodha"
                className="hero-partner-logo hero-partner-logo-zerodha"
                loading="lazy"
              />
            </a>
            <a href="https://groww.in" target="_blank" rel="noopener noreferrer" aria-label="Visit Groww" className="hero-partner-link">
              <img
                src="/logos/groww.svg"
                alt="Groww"
                className="hero-partner-logo hero-partner-logo-groww"
                loading="lazy"
              />
            </a>
            <a href="https://angelone.in" target="_blank" rel="noopener noreferrer" aria-label="Visit Angel One" className="hero-partner-link">
              <img
                src="/logos/angel-one.svg"
                alt="Angel One"
                className="hero-partner-logo hero-partner-logo-angel"
                loading="lazy"
              />
            </a>
            <a href="https://upstox.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Upstox" className="hero-partner-link">
              <img
                src="/logos/upstox.svg"
                alt="Upstox"
                className="hero-partner-logo hero-partner-logo-upstox"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
