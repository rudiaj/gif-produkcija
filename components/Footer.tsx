"use client";

import { motion } from "framer-motion";

const initial = { opacity: 0, y: -10 };
const whileInView = { opacity: 1, y: 0 };
const viewport = { once: true };

const Footer = () => {
  return (
    <div className="bg-dark flex-1 min-h-[50vh] flex justify-end items-end">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full sm:w-1/2 mb-24">
          <ul>
            <motion.li
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              className="text-text-secondary font-[var(--geomanist-font)] text-base leading-relaxed uppercase mb-1.5 last:mb-0"
            >
              GIF produkcija
            </motion.li>
            <motion.li
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ delay: 0.1 }}
              className="text-text-secondary font-[var(--geomanist-font)] text-base leading-relaxed mb-1.5 last:mb-0"
            >
              Radićeva 16
            </motion.li>
            <motion.li
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ delay: 0.2 }}
              className="text-text-secondary font-[var(--geomanist-font)] text-base leading-relaxed mb-1.5 last:mb-0"
            >
              47000 Karlovac
            </motion.li>
          </ul>
          <ul>
            <motion.li
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              className="text-text-secondary font-[var(--geomanist-font)] text-base leading-relaxed mb-1.5 last:mb-0"
            >
              kontakt@gif.hr
            </motion.li>
            <motion.li
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ delay: 0.1 }}
              className="text-text-secondary font-[var(--geomanist-font)] text-base leading-relaxed mb-1.5 last:mb-0"
            >
              <a
                href="tel:+385977929943"
                className="text-text-secondary font-[var(--geomanist-font)] text-base leading-relaxed no-underline"
              >
                +385 (97) 792 9943
              </a>
            </motion.li>
          </ul>
          <ul>
            <motion.li
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              className="text-text-secondary font-[var(--geomanist-font)] text-base leading-relaxed mb-1.5 last:mb-0"
            >
              <a
                href="https://www.facebook.com/gifprodukcija"
                target="_blank"
                className="text-text-secondary font-[var(--geomanist-font)] text-base leading-relaxed no-underline"
              >
                Facebook
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
