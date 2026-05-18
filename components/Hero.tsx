import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt=""
          fill
          className="object-cover object-[35%_center] md:object-center"
        />
      </div>
      <div className="absolute inset-0 bg-white/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="max-w-2xl">
          <h4 className="mb-4 text-secondary" data-aos="fade-up">
            premium babershop
          </h4>

          <h1
            className="mb-6 capitalize font-black"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            sharp cuts. <br /> clean style. <br />
            modern confidence.
          </h1>

          <p
            className="mb-8 max-w-3xl text-lg text-surface"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Experience precise grooming designed for modern gentlemen who value
            confidence, style, and a polished presence.
          </p>

          <div
            className="flex flex-wrap items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <button className="px-6 py-3 text-sm font-semibold uppercase text-surface">
              Book Appointment
            </button>

            <button className="flex h-14 w-14 items-center justify-center rounded-full border-3 border-secondary">
              <FaLongArrowAltRight className="text-surface" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
