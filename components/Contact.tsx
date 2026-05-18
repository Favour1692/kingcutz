import { contactinfo } from "@/constants";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-10 px-6 lg:px-0 mb-20 mt-15 overflow-x-hidden"
    >
      {/* Large decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[18vw] font-black text-black/3 uppercase tracking-widest whitespace-nowrap">
          Contact Us
        </span>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* left column */}
          <div className="flex flex-col gap-2">
            <h4 data-aos="fade-up">get in touch</h4>

            <h2 data-aos="fade-up" data-aos-delay="80">
              ready to book your appointment?
            </h2>

            <p data-aos="fade-up" data-aos-delay="140">
              Have questions, need a fresh cut, or ready to upgrade your style?
              Reach out today and book an appointment with our experienced
              barbers for a premium grooming experience.
            </p>

            {contactinfo.map((data, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-start lg:items-center gap-2"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div className="text-xl lg:text-2xl text-primary">
                  {data.icon}
                </div>

                <div className="space-y-1">
                  <h3>{data.title}</h3>
                  <p>{data.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* right column */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-2 border border-borderline shadow-lg items-center bg-surface"
            data-aos="zoom-in"
          >
            {/* image */}
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                src="/contact.webp"
                alt="man with nice haircut"
                fill
                className="object-cover"
              />
            </div>

            {/* text */}
            <div className="flex flex-col gap-4 p-4">
              <h3 data-aos="fade-up">let's create your perfect look</h3>

              <p data-aos="fade-up" data-aos-delay="80">
                Chat with us directly on whatsapp or give us a call. We&apos;re
                here to make you look and feel amazing.
              </p>

              <div className="space-y-2 mt-4 lg:mt-6">
                <div
                  className="flex gap-2 items-center py-2 px-3 border-2 border-borderline bg-borderline hover:bg-white cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="140"
                >
                  <div className="text-xl lg:text-2xl text-primary">
                    <FaWhatsapp />
                  </div>

                  <div>
                    <h4 className="text-foreground">chat on whatsapp</h4>
                    <p>Get a quick response</p>
                  </div>
                </div>

                <div
                  className="flex gap-2 items-center py-2 px-3 border-2 border-borderline hover:bg-borderline cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="text-xl lg:text-2xl text-primary">
                    <FiPhone />
                  </div>

                  <div>
                    <h4 className="text-foreground">call salon</h4>
                    <p>Speak with our team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
