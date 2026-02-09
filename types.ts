export type PageId = string;
export type NavTheme = 'light' | 'dark';

export interface NavItem {
  id: PageId;
  href: string;
  label: string;
  subItems?: { label: string; href: string }[];
}

export interface Partner {
  name: string;
  icon: string;
}

export interface SocialLink {
  href: string;
  iconClass: string;
}

export interface SocialItem extends SocialLink {
  label?: string;
}
