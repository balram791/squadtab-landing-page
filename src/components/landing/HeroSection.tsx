import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-squadtab-mint rounded-full blur-3xl opacity-60 animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-squadtab-peach rounded-full blur-3xl opacity-50 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">Upcoming</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up [animation-delay:100ms] opacity-0">
            Keep tabs with your squad —{" "}
            <span className="text-gradient">share, split, and stay fair.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:200ms] opacity-0">
            From road trips to rent, dinners to dorms — SquadTab makes splitting expenses 
            effortless. No more awkward money talks with friends.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up [animation-delay:300ms] opacity-0">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-lg transition-all group">
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg font-semibold border-2 hover:bg-secondary transition-all">
              <Users className="mr-2 w-5 h-5" />
              See How It Works
            </Button>
          </div>

          {/* Social Proof */}
          <div className="animate-fade-up [animation-delay:400ms] opacity-0">
            <p className="text-sm text-muted-foreground mb-4">Trusted by friend groups everywhere</p>
            <div className="flex items-center justify-center gap-1">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center" style={{
                backgroundColor: `hsl(${174 + i * 30} 40% 85%)`
              }}>
                    <span className="text-xs font-semibold text-foreground/70">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>)}
              </div>
              <span className="ml-4 text-sm text-muted-foreground">
                <strong className="text-foreground">2,500+</strong> squads on the waitlist
              </span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 max-w-5xl mx-auto animate-scale-in [animation-delay:500ms] opacity-0">
          <div className="relative">
            {/* Phone mockup image */}
            <div className="relative mx-auto w-72 sm:w-80 md:w-96 lg:w-[450px]">
              <img 
                src={heroMockup} 
                alt="SquadTab app mockup showing expense splitting features" 
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating cards */}
            <div className="hidden md:block absolute top-1/4 -left-8 lg:left-8 bg-card rounded-2xl p-4 shadow-card animate-float z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-squadtab-mint flex items-center justify-center">
                  <span className="text-sm font-semibold">🍕</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">Pizza Night</p>
                  <p className="text-xs text-muted-foreground">Split equally • £48</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute top-1/2 -right-8 lg:right-8 bg-card rounded-2xl p-4 shadow-card animate-float-delayed z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-squadtab-peach flex items-center justify-center">
                  <span className="text-sm font-semibold">✈️</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">Goa Trip</p>
                  <p className="text-xs text-muted-foreground">6 members • ₹24,500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;