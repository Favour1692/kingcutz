import React from "react";

const Booking = () => {
  return (
    <section id="booking" className="relative mt-24 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/book.webp')] bg-cover bg-center" />

      <div
        className="absolute inset-0 bg-black/60"
        data-aos="fade-in"
        data-aos-delay="50"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h4 className="mb-4" data-aos="fade-up">
          Book Now
        </h4>

        <h2
          className="mb-6 text-surface"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Ready For a Fresh Cut? <br /> Book Your Appointment Now!
        </h2>

        <p className="mb-10" data-aos="fade-up" data-aos-delay="160">
          Upgrade your look with sharp barbering, modern styling, and premium
          grooming tailored to you.
        </p>

        <button className="pribtn" data-aos="zoom-in" data-aos-delay="220">
          Book Appointment Now
        </button>
      </div>
    </section>
  );
};

export default Booking;
