import { NavItem } from '../types';

export const NAV_LINKS: NavItem[] = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'about', href: '/about', label: 'About' },
  { id: 'services', href: '/services', label: 'Services' },
  { id: 'training', href: '/training', label: 'Training' },
  { id: 'blogs', href: '/blogs', label: 'Blogs' },
  { id: 'contact', href: '/contact', label: 'Contact' },
];

export const LEGAL_LINKS = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '/booking', label: 'Booking' },
  { href: '#', label: 'Sitemap' },
];

export const SOCIALS = [
  { href: '#', iconClass: 'ri-twitter-x-fill' },
  { href: '#', iconClass: 'ri-linkedin-fill' },
  { href: '#', iconClass: 'ri-github-fill' },
  { href: '#', iconClass: 'ri-global-line' },
];