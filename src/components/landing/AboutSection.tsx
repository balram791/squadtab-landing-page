import { Heart, Target, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Built by friends,{" "}
              <span className="text-gradient">for friends</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                We've all been there — the group trip where someone forgets to pay, 
                the flat expenses that never quite add up, or the dinner where everyone 
                awkwardly calculates their share.
              </p>
              <p>
                SquadTab was born from our own frustrations with money between friends. 
                We wanted to build something that keeps friendships first and makes the 
                financial bits simple, transparent, and even fun.
              </p>
              <p className="text-foreground font-medium">
                Because life's too short for awkward money conversations with your mates.
              </p>
            </div>
          </div>

          {/* Right: Values */}
          <div className="space-y-6">
            {[
              {
                icon: Heart,
                title: "Friendships First",
                description: "Money shouldn't come between friends. We design every feature to keep relationships healthy and drama-free.",
                color: "bg-squadtab-peach",
              },
              {
                icon: Target,
                title: "Radical Simplicity",
                description: "No confusing menus or hidden features. SquadTab does one thing brilliantly — making shared expenses simple.",
                color: "bg-squadtab-mint",
              },
              {
                icon: Globe,
                title: "Local & Global",
                description: "Built for India and the UK with local payment rails, but designed for squads that span continents.",
                color: "bg-secondary",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="flex gap-5 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-soft"
              >
                <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <value.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "2,500+", label: "Squads waiting" },
            { value: "£500K+", label: "To be split" },
            { value: "2", label: "Countries" },
            { value: "100%", label: "Free to use" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card rounded-2xl border border-border/50">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
