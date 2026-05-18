import Image from "next/image";

const Features = () => {
  return (
    <section id="about" className="pt-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div
          className="relative overflow-hidden w-full max-h-125 aspect-3/4 order-2 lg:order-1"
          data-aos="fade-right"
        >
          <Image
            src="/feature.webp"
            alt=""
            fill
            className="object-cover object-top"
          />

          <div className="absolute bottom-6 left-6 h-32 w-2 bg-primary" />
        </div>

        <div
          className="order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <h4 className="mb-4">About Studio</h4>

          <h2 className="mb-6" data-aos="fade-up" data-aos-delay="250">
            Classic barbering refined for today's gentleman
          </h2>

          <p
            className="mb-10 leading-8"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            We combine timeless barbering techniques with modern styling to
            deliver clean cuts, sharp fades, and a premium grooming experience.
          </p>

          <div className="space-y-8">
            {[
              {
                title: "Precision Craftsmanship",
                description:
                  "Every haircut is executed with detail, balance, and consistency.",
              },
              {
                title: "Personalized Styling",
                description:
                  "We tailor every cut to match your face shape and personal style.",
              },
              {
                title: "Relaxed Premium Atmosphere",
                description:
                  "Enjoy a clean, comfortable environment built for modern grooming.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay={450 + index * 150}
              >
                <div className="mt-2 h-4 w-4 rounded-full border" />

                <div>
                  <h3 className="mb-2">{item.title}</h3>

                  <p className="leading-7">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
