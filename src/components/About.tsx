import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import { CheckCircle, Users, Clock, Trophy } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const achievements = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Trophy, number: "50+", label: "Awards Won" },
    { icon: Clock, number: "10+", label: "Years Experience" },
    { icon: CheckCircle, number: "98%", label: "Success Rate" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring your event exceeds expectations."
    },
    {
      title: "Innovation",
      description: "Creative solutions and cutting-edge technology to make your event truly unique."
    },
    {
      title: "Reliability", 
      description: "Trusted by hundreds of clients to deliver exceptional results on time, every time."
    },
    {
      title: "Passion",
      description: "Our team is passionate about creating memorable experiences that last a lifetime."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About 
            <span className="text-gradient"> Lamaki Events Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in creating extraordinary events that leave lasting impressions and exceed expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Creating Unforgettable Moments Since 2014
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Lamaki Events Solutions, we believe every event is a story waiting to be told. With over a decade of experience in the events industry, we have mastered the art of transforming visions into reality.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of dedicated professionals brings creativity, precision, and passion to every project. From intimate gatherings to large-scale corporate events, we handle every detail with care and expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection("contact")}>
                Get Started
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/gallery")}>
                View Portfolio
              </Button>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              {[
                "Full-service event planning and management",
                "Experienced team of event professionals", 
                "Customized solutions for every budget",
                "24/7 support throughout your event"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats and Values */}
          <div className="animate-fade-in">
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 card-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 border-0 bg-muted/30">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;