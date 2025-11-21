export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}

export interface SponsorPackage {
  name: string;
  price: string;
  includes: string[];
  highlight?: boolean;
}

export interface DayPlan {
  day: number;
  city: string;
  activities: string[];
}

export interface Episode {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
}

export interface TeamRole {
  label: string;
  value: string;
}