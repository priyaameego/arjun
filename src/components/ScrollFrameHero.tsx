import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '../data/content';

// Import all frame images from the specified assets directory using Vite's glob import
const frameModules = import.meta.glob(
  '../assets/_MConverter.eu_Cement_powder_forms_building_str…_202608311302-cleaned/*.png',
  { eager: true, query: '?url', import: 'default' }
);

// Extract URLs, sort them alphabetically to ensure correct order
const frameUrls = Object.keys(frameModules)
  .sort()
  .map((key) => frameModules[key] as string);

const TOTAL_FRAMES = frameUrls.length; // Should be 192

const ScrollFrameHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedFrames, setLoadedFrames] = useState(0);

  // Preload images logic
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    const loadImage = (index: number) => {
      if (!isMounted) return;
      const img = new Image();
      img.src = frameUrls[index];
      img.onload = () => {
        if (!isMounted) return;
        loadedImages[index] = img;
        loadedCount++;
        setLoadedFrames(loadedCount);
        
        // Draw the first frame immediately when it's ready
        if (index === 0 && canvasRef.current) {
          drawFrame(0, loadedImages);
        }
      };
    };

    // Eagerly load the first few frames
    const EAGER_LOAD_COUNT = Math.min(10, TOTAL_FRAMES);
    for (let i = 0; i < EAGER_LOAD_COUNT; i++) {
      loadImage(i);
    }

    // Lazy load the rest sequentially to avoid blocking the network
    const lazyLoadRest = async () => {
      for (let i = EAGER_LOAD_COUNT; i < TOTAL_FRAMES; i++) {
        if (!isMounted) break;
        // Simple async wait to yield to the browser
        await new Promise((resolve) => setTimeout(resolve, 5));
        loadImage(i);
      }
    };
    lazyLoadRest();

    setImages(loadedImages);

    return () => {
      isMounted = false;
    };
  }, []);

  // Drawing logic for the canvas
  const drawFrame = (frameIndex: number, imgs: HTMLImageElement[] = images) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgs[frameIndex];
    if (!img) return; // Image might not be loaded yet

    // Handle responsive drawing (object-fit: cover logic)
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;

    const scale = Math.max(cw / iw, ch / ih);
    const w = iw * scale;
    const h = ih * scale;
    const x = (cw - w) / 2;
    const y = (ch - h) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, w, h);
  };

  // Scroll synchronization
  useEffect(() => {
    let animationFrameId: number;
    let lastScrollY = window.scrollY;

    const renderLoop = () => {
      // Only recalculate if we have scrolled
      if (lastScrollY !== window.scrollY) {
        lastScrollY = window.scrollY;
        
        if (containerRef.current) {
          const containerTop = containerRef.current.offsetTop;
          const containerHeight = containerRef.current.offsetHeight;
          const viewportHeight = window.innerHeight;
          
          // The distance we can scroll within the container while it's sticky
          const scrollableDistance = containerHeight - viewportHeight;
          
          // Calculate progress (0 to 1)
          let progress = (window.scrollY - containerTop) / scrollableDistance;
          progress = Math.max(0, Math.min(1, progress));
          
          // Calculate current frame
          const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.floor(progress * TOTAL_FRAMES)
          );
          
          drawFrame(frameIndex);
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [images]);

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const parent = canvasRef.current.parentElement;
        if (parent) {
          // Use devicePixelRatio for sharper images on retina screens
          const dpr = window.devicePixelRatio || 1;
          canvasRef.current.width = parent.clientWidth * dpr;
          canvasRef.current.height = parent.clientHeight * dpr;
          canvasRef.current.style.width = `${parent.clientWidth}px`;
          canvasRef.current.style.height = `${parent.clientHeight}px`;
          
          // Redraw current frame after resize
          if (containerRef.current) {
             const containerTop = containerRef.current.offsetTop;
             const containerHeight = containerRef.current.offsetHeight;
             const scrollableDistance = containerHeight - window.innerHeight;
             let progress = (window.scrollY - containerTop) / scrollableDistance;
             progress = Math.max(0, Math.min(1, Math.max(0, progress)));
             const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));
             drawFrame(frameIndex);
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup
    
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  // Use the first approved hero text overlay to preserve content storytelling
  const mainMessage = heroSlides[0];

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-charcoal-900"
      style={{ height: '400vh' }} // scroll length for the animation
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* The Frame Canvas */}
        <div className="absolute inset-0">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        {/* Overlays for contrast and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Existing Premium Content Overlay */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="container-premium w-full pointer-events-auto">
            <div className="max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  className="space-y-6"
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-4">
                    <span className="section-eyebrow !text-brand-red">
                      ARJUN CEMENT
                    </span>
                    <span className="h-px w-12 bg-brand-red opacity-60" />
                    <span className="section-eyebrow !text-white/40">
                      EST. 1992
                    </span>
                  </div>

                  {/* Headline */}
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-800 text-white leading-tight tracking-tight"
                    style={{ fontWeight: 800, whiteSpace: 'pre-line', lineHeight: 1.1 }}
                  >
                    {mainMessage.message}
                  </h1>

                  {/* CTA */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a href="/arjun" className="btn-primary">
                      Our Products
                    </a>
                    <a
                      href="/contact"
                      className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal-900 text-sm"
                    >
                      Get in Touch
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Subtle Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase font-display">Scroll</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-brand-red"
              animate={{ top: ['-50%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>

        {/* Progress indicator (subtle bar at bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 pointer-events-none">
          <div 
            className="h-full bg-brand-red transition-none"
            style={{ 
              width: `${Math.min(100, Math.max(0, loadedFrames / TOTAL_FRAMES * 100))}%`,
              opacity: loadedFrames < TOTAL_FRAMES ? 1 : 0 
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default ScrollFrameHero;
