import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const events = [
  { id: 1, img: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-10.jpg", title: "Corporate Gala" },
  { id: 2, img: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-16.jpg", title: "Wedding Setup" },
  { id: 3, img: "https://pub-9b875df7585a486d8e59955412f6b6d7.r2.dev/SaFi_Production-26.jpg", title: "Concert Night" },
];

const Portfolio: FC = () => {
  const nav = useNavigate();

  return (
    <section id="portfolio" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-10">Our Events</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-lg font-semibold text-white mb-3">{event.title}</h3>
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => nav("/gallery")}
                >
                  View More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
