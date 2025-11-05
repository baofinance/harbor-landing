"use client";
import { useRef, useEffect, useState, ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let observer: IntersectionObserver | null = null;

    // Check if element is already in viewport after layout (for above-the-fold content)
    const checkInitialViewport = () => {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      // If element is already visible, show it immediately
      if (isInViewport) {
        setTimeout(() => {
          setInView(true);
        }, delay);
        return true;
      }
      return false;
    };

    // Use requestAnimationFrame to ensure layout is complete
    requestAnimationFrame(() => {
      if (checkInitialViewport()) {
        return; // Already visible, no need for observer
      }

      // Use more lenient threshold on mobile
      const isMobile = window.innerHeight < 800;
      const observerThreshold = isMobile ? 0.01 : threshold;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer?.unobserve(element);
            setTimeout(() => {
              setInView(true);
            }, delay);
          }
        },
        { threshold: observerThreshold }
      );

      observer.observe(element);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        filter: blur ? (inView ? "blur(0px)" : "blur(10px)") : "none",
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
