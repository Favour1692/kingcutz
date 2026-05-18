import { testimonials } from "@/constants";
import { CgQuote } from "react-icons/cg";

const Testimonials = () => {
  return (
    <section className="pt-24 relative overflow-hidden">
      {/* Large decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[18vw] font-black text-black/3 uppercase tracking-widest whitespace-nowrap">
          Testimonials
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h4 className="mb-3" data-aos="fade-up">
            Testimonials
          </h4>

          <h2 data-aos="fade-up" data-aos-delay="80">
            Trusted By Clients Who Value Style
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="bg-surface p-8 border border-borderline hover:border-primary transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <span className="text-primary text-5xl leading-none block mb-6">
                <CgQuote />
              </span>

              <p className="text-foreground leading-relaxed mb-8 text-sm">
                {t.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-700 overflow-hidden shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-foreground font-black">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
