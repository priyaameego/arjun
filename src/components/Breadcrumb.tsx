import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, light = true }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-3">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
              className={`text-xs ${light ? 'text-white/30' : 'text-charcoal-300'}`}
            >
              /
            </motion.span>
          )}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.6, duration: 0.6, ease: 'easeOut' }}
            className="relative group"
          >
            {item.href && index < items.length - 1 ? (
              <Link
                to={item.href}
                className={`text-xs tracking-widest uppercase font-display transition-colors duration-400 ${
                  light
                    ? 'text-white/60 hover:text-white'
                    : 'text-charcoal-500 hover:text-charcoal-900'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ) : (
              <span
                className={`text-xs tracking-widest uppercase font-display ${
                  light ? 'text-white' : 'text-charcoal-900'
                }`}
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </motion.div>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
