import { FoxIcon } from "./FoxIcon";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FoxIcon className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">FiscalFox</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="#agents"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Agents
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="secondary" size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
