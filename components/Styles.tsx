import { styles } from "@/constants";
import Image from "next/image";

const Styles = () => {
  return (
    <section className="pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14" data-aos="fade-up">
          <h4 className="mb-3" data-aos="fade-up" data-aos-delay="50">
            Signature Looks
          </h4>
          <h2 className="" data-aos="fade-up" data-aos-delay="120">
            Modern cuts built around <br /> your style
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {styles.map((style, index) => (
            <div
              key={style.label}
              className="group relative overflow-hidden cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              <div className="relative w-full max-h-125 aspect-3/4 bg-neutral-800 overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-white font-black text-xl"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  {style.label}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 border border-borderline flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Styles;
