import React from 'react';
import { motion } from 'framer-motion';

interface RollingNumberProps {
  value: number;
  duration?: number;
  delay?: number;
}

export const RollingNumber: React.FC<RollingNumberProps> = ({ value, duration = 1.5, delay = 0 }) => {
  // Split number into array of digits
  const digits = value.toString().split('').map(Number);

  return (
    <div className="inline-flex overflow-hidden h-[1em] leading-none">
      {digits.map((digit, i) => (
        <DigitColumn key={i} digit={digit} duration={duration} delay={delay + i * 0.1} />
      ))}
    </div>
  );
};

interface DigitColumnProps {
  digit: number;
  duration: number;
  delay: number;
}

const DigitColumn: React.FC<DigitColumnProps> = ({ digit, duration, delay }) => {
  return (
    <div className="relative h-[1em] w-[0.6em] tabular-nums">
      <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: `${-digit * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration, delay, ease: [0.32, 0.72, 0, 1] }} // Custom spring-like bezier
          className="flex flex-col"
      >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <span key={num} className="h-[1em] flex items-center justify-center">
                  {num}
              </span>
          ))}
      </motion.div>
    </div>
  );
};