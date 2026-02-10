export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PolaroidImage {
  src: string;
  alt: string;
  rotation: string; // Tailwind class e.g., 'rotate-6'
  position: string; // Tailwind class e.g., 'top-20 left-10'
  zIndex?: number;
}
