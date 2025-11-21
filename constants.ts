import { NavItem, SponsorPackage, DayPlan, Episode, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Itinerary", href: "/itinerary" },
  { label: "Episodes", href: "/episodes" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" }
];

export const FEATURES: Feature[] = [
  { title: "Cinematic Episodes", desc: "6–10 long-form episodes showing the heartbeat of each city." },
  { title: "Short-Form Content", desc: "Daily TikToks and Reels for high engagement and brand amplification." },
  { title: "Live Events & Parties", desc: "Beach parties, rooftop events and sponsored brand activations." },
  { title: "Sponsor Integration", desc: "Seamless product placement, fintech demos, and exclusive experiences." }
];

export const SPONSOR_PACKAGES: SponsorPackage[] = [
  {
    name: "Experience Sponsor",
    price: "$10,000",
    includes: [
      "Sponsor one specific experience",
      "On-screen mention",
      "Custom short-form content",
      "Social media shoutouts"
    ]
  },
  {
    name: "City Sponsor",
    price: "$25,000",
    includes: [
      "City-level branding dominance",
      "In-episode product demo",
      "Local event activation",
      "Hotel partnership opportunities",
      "Logo on crew apparel"
    ],
    highlight: true
  },
  {
    name: "Title Sponsor",
    price: "Custom",
    includes: [
      "Title billing (WAXE presented by X)",
      "Top logo placement everywhere",
      "Dedicated full episode",
      "Product integration across all eps",
      "Exclusive event naming rights"
    ]
  },
  {
    name: "In-Kind Partner",
    price: "Service Exchange",
    includes: [
      "Hotels, transport, or gear",
      "Media credits in episodes",
      "Social media tagging",
      "Behind the scenes content"
    ]
  }
];

export const ITINERARY: DayPlan[] = [
  { day: 1, city: "Lagos", activities: ["Opening event & Press", "Boat race tour", "Rooftop VIP party"] },
  { day: 2, city: "Lagos", activities: ["Market food crawl", "Nightlife shoot", "Sponsor fintech demo"] },
  { day: 3, city: "Lagos -> Benin City", activities: ["Travel day", "Road trip content", "Arrival dinner"] },
  { day: 7, city: "Benin", activities: ["Cultural museums", "Royal palace visit", "Art & tattoo workshop"] },
  { day: 12, city: "Lomé (Togo)", activities: ["Beach party", "Fishing expedition", "Jet-ski racing"] },
  { day: 16, city: "Kumasi (Ghana)", activities: ["Traditional crafts", "Kente weaving", "Local market features"] },
  { day: 18, city: "Accra (Ghana)", activities: ["Festival attendance", "Surfing lessons", "Club tour"] },
  { day: 22, city: "Abidjan (Côte d’Ivoire)", activities: ["Final festival", "Sponsor gala", "Wrap-up shoot"] }
];

export const EPISODES: Episode[] = [
  { id: '1', title: "Lagos: The Energy Never Stops", thumbnail: "https://picsum.photos/800/450?random=1", duration: "24:15", views: "1.2M" },
  { id: '2', title: "Benin City: Ancient Walls & Modern Art", thumbnail: "https://picsum.photos/800/450?random=2", duration: "21:30", views: "850K" },
  { id: '3', title: "Crossing Borders: The Road to Togo", thumbnail: "https://picsum.photos/800/450?random=3", duration: "18:45", views: "920K" },
  { id: '4', title: "Lomé: Hidden Gems of the Coast", thumbnail: "https://picsum.photos/800/450?random=4", duration: "22:10", views: "760K" },
  { id: '5', title: "Kumasi Kings & Culture", thumbnail: "https://picsum.photos/800/450?random=5", duration: "26:00", views: "1.1M" },
  { id: '6', title: "Abidjan: The Grand Finale", thumbnail: "https://picsum.photos/800/450?random=6", duration: "29:30", views: "1.5M" },
];

export const ROLES = [
  "Host / Presenter",
  "Cameraperson / DOP",
  "Editor",
  "Producer",
  "Artist",
  "Musician",
  "Influencer",
  "Fixer / Local Guide"
];