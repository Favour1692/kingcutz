import { quickLinks, servicelist, socialLinks } from "@/constants";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { logo } from "@/fonts";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-borderline">
      {/* Top footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span
                className={`${logo.className} antialiased text-foreground font-black text-2xl tracking-tight`}
              >
                King<span className="text-primary">Cutz</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              At KingCutz, we are dedicated to the art of classic grooming and
              modern style. We are committed to providing every gentleman with
              exceptional service and the atmosphere designed for gentlemen.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-borderline flex items-center justify-center hover:border-borderline hover:text-primary transition-colors duration-200 text-xs font-bold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-black uppercase tracking-widest text-xs mb-6 pb-3 border-b border-borderline">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-primary shrink-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-black uppercase tracking-widest text-xs mb-6 pb-3 border-b border-borderline">
              Our Services
            </h4>
            <ul className="space-y-3">
              {servicelist.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-3 h-px bg-primary shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-foreground font-black uppercase tracking-widest text-xs mb-6 pb-3 border-b border-borderline">
              Subscribe Our Newsletter
            </h4>
            <p className="text-sm mb-5">
              Get exclusive offers, grooming tips, and style updates delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-muted border border-borderline text-white placeholder-white px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors duration-200"
              />
              <button className="bg-primary hover:bg-secondary text-white font-black uppercase tracking-widest text-xs py-3 transition-all duration-300">
                Subscribe Now
              </button>
            </div>

            {/* Contact */}
            <div className="mt-8 space-y-2">
              <p className="text-sm flex items-center gap-2">
                <span className="text-primary">
                  <FaPhoneAlt />
                </span>{" "}
                +234-123-456789
              </p>
              <p className="text-sm flex items-center gap-2">
                <span className="text-primary">
                  <FaEnvelope />
                </span>{" "}
                info@kingcutz.com
              </p>
              <p className="text-sm flex items-center gap-2">
                <span className="text-primary">
                  <FaMapMarkerAlt />
                </span>{" "}
                18 Admiralty Way, Lekki Phase 1, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} KingCutz. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-primary text-xs transition-colors duration-200"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
