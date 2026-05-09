"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const services = [
  {
    tempId: 0,
    title: "Signature Facial",
    description: "Deep-cleansing, hydrating facial customized to your skin type. Includes skin analysis and a post-care guide.",
    by: "From $89 · 60 min",
    imgSrc: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
  },
  {
    tempId: 1,
    title: "Aromatic Body Wrap",
    description: "Full-body detox wrap with botanical extracts that nourish, firm and soften skin from head to toe.",
    by: "From $120 · 75 min",
    imgSrc: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
  },
  {
    tempId: 2,
    title: "LED Light Therapy",
    description: "Clinically proven LED panels target acne, redness and fine lines — zero downtime with visible results after one session.",
    by: "From $99 · 45 min",
    imgSrc: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
  },
  {
    tempId: 3,
    title: "Microneedling",
    description: "Precision micro-channels trigger natural collagen renewal, reducing scars, enlarged pores and fine lines.",
    by: "From $179 · 60 min",
    imgSrc: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&q=80",
  },
  {
    tempId: 4,
    title: "Chemical Peel",
    description: "Medical-grade exfoliation dissolves dull surface cells to reveal brighter, smoother and more even-toned skin.",
    by: "From $129 · 45 min",
    imgSrc: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80",
  },
  {
    tempId: 5,
    title: "Deep Tissue Massage",
    description: "Firm targeted pressure releases chronic muscle tension and stimulates lymphatic drainage for full-body relief.",
    by: "From $110 · 60 min",
    imgSrc: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
  },
  {
    tempId: 6,
    title: "Anti-Aging Treatment",
    description: "A powerful blend of peptide serums, radio-frequency lifting and massage to visibly firm and plump the skin.",
    by: "From $199 · 90 min",
    imgSrc: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
  },
  {
    tempId: 7,
    title: "Hydration Infusion",
    description: "Intense hyaluronic acid and vitamin C infusion leaves skin dewy, plump and luminous for weeks.",
    by: "From $95 · 50 min",
    imgSrc: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80",
  },
  {
    tempId: 8,
    title: "Exfoliation Scrub",
    description: "Luxurious mineral salt and botanical oil scrub sloughs away dead cells for silky-smooth, radiant skin.",
    by: "From $79 · 45 min",
    imgSrc: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
  },
  {
    tempId: 9,
    title: "Skin Rejuvenation",
    description: "Laser-assisted photo-rejuvenation fades pigmentation, thread veins and sun damage for a visibly clearer complexion.",
    by: "From $219 · 60 min",
    imgSrc: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&q=80",
  },
];

type Service = typeof services[0];

interface ServiceCardProps {
  position: number;
  service: Service;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ position, service, handleMove, cardSize }) => {
  const isCenter = position === 0;
  const opacity = isCenter ? 1 : Math.abs(position) === 1 ? 0.65 : 0.35;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 transition-all duration-500 ease-in-out overflow-hidden",
        isCenter
          ? "z-10 bg-white dark:bg-zinc-800 border-primary"
          : "z-0 bg-card border-border hover:border-primary/40"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        opacity,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "none",
      }}
    >
      {/* Diagonal corner accent */}
      <span
        className="absolute block origin-top-right rotate-45 bg-border z-10 pointer-events-none"
        style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }}
      />

      {/* Service image */}
      <div className="relative h-36 w-full overflow-hidden flex-shrink-0">
        <Image
          src={service.imgSrc}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 290px, 365px"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col px-6 py-4 gap-1.5">
        <h3 className={cn(
          "font-semibold text-base leading-snug",
          "text-foreground"
        )}>
          {service.title}
        </h3>
        <p className={cn(
          "text-xs leading-relaxed line-clamp-3",
          "text-muted-foreground"
        )}>
          {service.description}
        </p>
        <p className={cn(
          "text-sm font-semibold mt-0.5",
          "text-primary"
        )}>
          {service.by}
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [servicesList, setServicesList] = useState(services);

  const handleMove = (steps: number) => {
    const newList = [...servicesList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setServicesList(newList);
  };

  // Auto-advance every 3 s using functional updater to avoid stale closure
  useEffect(() => {
    const timer = setInterval(() => {
      setServicesList((prev) => {
        const list = [...prev];
        const item = list.shift();
        if (!item) return prev;
        return [...list, { ...item, tempId: Math.random() }];
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-muted/30" style={{ height: 600 }}>
      {servicesList.map((service, index) => {
        const position = servicesList.length % 2
          ? index - (servicesList.length + 1) / 2
          : index - servicesList.length / 2;
        return (
          <ServiceCard
            key={service.tempId}
            service={service}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous service"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next service"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
