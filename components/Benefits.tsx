import { stats } from "@/constants";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h4 className="mb-4" data-aos="fade-up">
              Our legacy
            </h4>

            <h2 className="mb-6" data-aos="fade-up" data-aos-delay="80">
              Premium grooming for men who value appearance
            </h2>

            <p className="mb-10" data-aos="fade-up" data-aos-delay="140">
              For years, we&apos;ve helped clients look sharp and feel confident
              through exceptional cuts, grooming expertise, and consistent
              service.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-borderline">
              {stats.map((s, index) => (
                <div
                  key={s.label}
                  className="bg-surface p-8"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <p className="text-primary text-4xl font-black mb-1">
                    {s.value}
                  </p>
                  <p className="text-foreground text-sm uppercase tracking-widest">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative" data-aos="fade-left">
            <div className="relative overflow-hidden w-full max-h-125 aspect-3/4">
              <Image
                src="/benefit.webp"
                alt="Professional barber"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="absolute -top-6 -left-6 w-48 h-48 bg-primary -z-10"
              data-aos="zoom-in"
              data-aos-delay="120"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
