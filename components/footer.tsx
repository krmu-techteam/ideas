import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Github,
} from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";

export default function Footer() {
  return (
    <footer className="bg-[#16212C] text-white pt-12 sm:pt-16 lg:pt-20 pb-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo and About */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block focus:outline-hidden py-0.5 group"
            >
              <Image
                src="/ideas-logo.png"
                alt="IDEAS 4.0 - K.R. Mangalam University"
                width={356}
                height={40}
                className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
                priority
              />
            </Link>
            <p className="text-white text-sm leading-relaxed">
              K.R. Mangalam University (KRMU), established in 2013 in Gurugram,
              Haryana, is a forward-looking institution dedicated to excellence
              in education, research, and innovation.
            </p>
            <p className="text-white text-sm leading-relaxed">
              As the proud organiser of IDEAS 4.0, KRMU continues its mission of
              inspiring innovation, celebrating creativity, and empowering the
              next generation.
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-2 sm:pt-4">
              <Link
                href="https://www.facebook.com/krmuniv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-royal-900 transition-all duration-300 transform hover:scale-110 hover:rotate-6 touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/krmuniv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-royal-900 transition-all duration-300 transform hover:scale-110 hover:rotate-6 touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/school/k-r-mangalam-university"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-royal-900 transition-all duration-300 transform hover:scale-110 hover:rotate-6 touch-manipulation"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://www.youtube.com/@KRMangalamUniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-royal-900 transition-all duration-300 transform hover:scale-110 hover:rotate-6 touch-manipulation"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 border-b border-white pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block py-1 text-sm sm:text-base touch-manipulation"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-white hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block py-1 text-sm sm:text-base touch-manipulation"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="text-white hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block py-1 text-sm sm:text-base touch-manipulation"
                >
                  Cultural Events
                </Link>
              </li>
              <li>
                <Link
                  href="/register/selection"
                  className="text-white hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block py-1 text-sm sm:text-base touch-manipulation"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-white hover:text-gold-300 transition-all duration-300 hover:translate-x-1 inline-block py-1 text-sm sm:text-base touch-manipulation"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 border-b border-white pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-1 flex-shrink-0" />
                <span className="text-white text-sm leading-relaxed">
                  Sohna Road, Gurugram, Delhi-NCR, Haryana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white flex-shrink-0" />
                <a
                  href="mailto:admissions@krmangalam.edu.in"
                  className="text-white hover:text-gold-300 text-sm"
                >
                  admissions@krmangalam.edu.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white flex-shrink-0" />
                <div className="text-white text-sm flex flex-col">
                  <a
                    href="tel:01242867800"
                    className="hover:text-gold-300 font-medium"
                  >
                    Landline: 0124-2867800
                  </a>
                  <span className="text-xs text-white">
                    Helpline: 08800697010-15 | 8192888444 | 8800697012
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 border-b border-white pb-2">
              Stay Updated
            </h3>
            <p className="text-white text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates on IDEAS 4.0.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Developer Credits */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-300 mb-8">
            <div className="text-center md:text-left">
              <p className="font-semibold text-white mb-3">
                Built & Crafted By
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold-400/40">
                    <Image
                      src="/yashraj.webp"
                      alt="Yashraj Pahuja"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-white text-sm">
                      Yashraj Pahuja
                    </span>
                    <div className="flex items-center gap-2">
                      {/* <span className="inline-block px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-medium">Dev 1</span> */}
                      <a
                        href="https://www.linkedin.com/in/yashraj-pahuja-28a34b325/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-white hover:text-blue-300 hover:bg-blue-400/10 rounded transition-all duration-200 touch-manipulation"
                        title="LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href="https://github.com/CYBORG-YASHRAJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-white hover:text-white hover:bg-gray-600/20 rounded transition-all duration-200 touch-manipulation"
                        title="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 ">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold-400/40">
                    <Image
                      src="/piyush.webp"
                      alt="Piyush Sharma"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-white text-sm">
                      Piyush Sharma
                    </span>
                    <div className="flex items-center gap-2">
                      {/* <span className="inline-block px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-medium">Dev 2</span> */}
                      <a
                        href="https://www.linkedin.com/in/piyush-078455221/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 rounded transition-all duration-200 touch-manipulation"
                        title="LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href="https://github.com/ScienHAC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-white hover:text-white hover:bg-gray-600/20 rounded transition-all duration-200 touch-manipulation"
                        title="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right max-w-mdtext-xs text-white">
              <p className="max-w-lg leading-relaxed">
                Designed for performance, accessibility, and
                scalability—reflecting the spirit of IDEAS 4.0 innovation &
                collaboration.
              </p>
            </div>
          </div>
          <div className=" text-right textwhite text-xs sm:text-sm border-t border-white/20">
            <div className="flex justify-end items-center gap-6 mt-2">
              <p suppressHydrationWarning>
                &copy; {new Date().getFullYear()} K.R. Mangalam University. All
                rights reserved.
              </p>
              <p className="flex items-center gap-2">
                <Link
                  href="#"
                  className="hover:text-white touch-manipulation py-1"
                >
                  Privacy Policy
                </Link>
                <span>{" | "}</span>
                <Link
                  href="#"
                  className="hover:text-white touch-manipulation py-1"
                >
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
