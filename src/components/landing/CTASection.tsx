import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xzdbozql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
        toast({
          title: "You're on the list! 🎉",
          description: "We'll notify you as soon as SquadTab launches.",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Emoji decoration */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-4xl animate-float">🇮🇳</span>
            <span className="text-5xl animate-pulse-soft">🤝</span>
            <span className="text-4xl animate-float-delayed">🇬🇧</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-background mb-6">
            Be the first to try SquadTab
          </h2>
          <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
            Join 2,500+ squads on the waitlist. We're launching soon in India and the UK — 
            and early birds get exclusive perks.
          </p>

          {/* Email Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 rounded-full px-6 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary focus:ring-primary"
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 rounded-full px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-primary">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">You're on the list! Check your inbox.</span>
            </div>
          )}

          {/* Benefits */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-background/60">
            {["Free forever for basic use", "No credit card required", "Unsubscribe anytime"].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
