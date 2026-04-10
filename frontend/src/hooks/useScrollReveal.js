import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = () => {
  const [revealed, setRevealed] = useState(new Set());
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    Object.values(refs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (index) => (el) => {
    refs.current[index] = el;
  };

  const getStyle = (index, delay = 0) => {
    const isRevealed = revealed.has(String(index));
    return {
      opacity: isRevealed ? 1 : 0,
      transform: isRevealed ? 'translateY(0px)' : 'translateY(40px)',
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
    };
  };

  return { setRef, getStyle };
};
