import { services } from "@/constants";

const Services = () => {
  return (
    <section className="pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <h4 className="mb-3" data-aos="fade-up">
              Our Services
            </h4>

            <h2 data-aos="fade-up" data-aos-delay="80">
              Professional Haircut <br /> For Every Style
            </h2>
          </div>

          <button
            className="self-start lg:self-auto secbtn"
            data-aos="zoom-in"
            data-aos-delay="140"
          >
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-borderline">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-surface p-8 group hover:bg-borderline transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <span className="text-primary text-3xl block mb-5">
                {service.icon}
              </span>

              <h3 className="text-foreground font-black text-lg mb-3">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <a
                href="#"
                className="text-primary text-xs uppercase tracking-widest font-bold hover:text-secondary transition-colors duration-200"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
