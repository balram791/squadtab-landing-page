import { Receipt, Users, Bell, Wallet, PieChart, Zap } from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Smart Bill Splitting",
    description: "Split by percentage, shares, or equally. Add items, taxes, and tips — we handle the math.",
    color: "bg-squadtab-mint",
  },
  {
    icon: Users,
    title: "Group Expense Tracking",
    description: "Create groups for trips, flats, or events. Track who owes what in real-time.",
    color: "bg-squadtab-peach",
  },
  {
    icon: Wallet,
    title: "One-Tap Settlements",
    description: "Settle up instantly with UPI in India or Open Banking in the UK. No manual transfers.",
    color: "bg-secondary",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Gentle nudges for pending payments. No more awkward 'hey, you owe me' texts.",
    color: "bg-squadtab-mint",
  },
  {
    icon: PieChart,
    title: "Expense Insights",
    description: "See spending patterns, who's contributing most, and where your money goes.",
    color: "bg-squadtab-peach",
  },
  {
    icon: Zap,
    title: "Event Planning",
    description: "Plan group activities, set budgets, and collect contributions — all in one place.",
    color: "bg-secondary",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Everything your squad needs
          </h2>
          <p className="text-lg text-muted-foreground">
            From splitting a coffee to managing a month-long trip, SquadTab keeps everyone on the same page.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-3xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-sm text-muted-foreground mb-6">Secure payments powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="font-bold text-foreground">UPI</span>
              </div>
              <span className="font-medium">India</span>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="font-bold text-foreground text-xs">OB</span>
              </div>
              <span className="font-medium">Open Banking UK</span>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-lg">🔒</span>
              </div>
              <span className="font-medium">256-bit Encryption</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
