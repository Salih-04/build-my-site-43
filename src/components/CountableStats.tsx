import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountableStatsProps {
  stats: { number: string; label: string }[];
}

const CountableStats = ({ stats }: CountableStatsProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <CountingStat
          key={index}
          number={stat.number}
          label={stat.label}
          shouldAnimate={inView}
          delay={index * 200}
        />
      ))}
    </div>
  );
};

interface CountingStatProps {
  number: string;
  label: string;
  shouldAnimate: boolean;
  delay: number;
}

const CountingStat = ({ number, label, shouldAnimate, delay }: CountingStatProps) => {
  const [displayNumber, setDisplayNumber] = useState('0');

  useEffect(() => {
    if (!shouldAnimate) return;

    const timeout = setTimeout(() => {
      // Extract the numeric part and suffix
      const numericMatch = number.match(/(\d+)(.*)$/);
      if (!numericMatch) {
        setDisplayNumber(number);
        return;
      }

      const targetNum = parseInt(numericMatch[1]);
      const suffix = numericMatch[2];
      
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;
      const increment = targetNum / steps;

      let currentNum = 0;
      const timer = setInterval(() => {
        currentNum += increment;
        if (currentNum >= targetNum) {
          setDisplayNumber(`${targetNum}${suffix}`);
          clearInterval(timer);
        } else {
          setDisplayNumber(`${Math.floor(currentNum)}${suffix}`);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [shouldAnimate, number, delay]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2">{displayNumber}</div>
      <div className="text-primary-foreground/80">{label}</div>
    </div>
  );
};

export default CountableStats;