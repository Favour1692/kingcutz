import { pricingColumns } from "@/constants";

const Pricing = () => {
  return (
    <section id="pricing" className="pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h4 className="mb-3" data-aos="fade-up">
            Price List
          </h4>

          <h2 data-aos="fade-up" data-aos-delay="80">
            Premium Grooming At Fair Prices
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pricingColumns.map((col, ci) => (
            <div key={col.heading} data-aos="fade-up" data-aos-delay={ci * 150}>
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-800">
                <h3 className="text-foreground font-black text-xl">
                  {col.heading}
                </h3>

                {ci === 1 && (
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                    Popular
                  </span>
                )}
              </div>

              <div className="space-y-0">
                {col.items.map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex justify-between items-center py-5 border-b border-borderline group ${
                      i % 2 === 0 ? "bg-transparent" : "bg-surface"
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />

                      <span className="text-foreground group-hover:text-secondary transition-colors duration-200">
                        {item.name}
                      </span>
                    </div>

                    <span className="text-primary text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
