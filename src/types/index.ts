/**
 * TypeScript Type Definitions
 * CV Mandiri Multi Usaha
 */

// Product Types
export interface Product {
  id: string;
  name: string;
  brand: string;
  type: string;
  description: string;
  features: string[];
  specifications: {
    printSpeed?: string;
    printResolution?: string;
    paperSize?: string;
    connectivity?: string[];
    dimensions?: string;
    weight?: string;
  };
  pricing: {
    daily?: number;
    weekly?: number;
    monthly: number;
    yearly?: number;
  };
  images: string[];
  thumbnail: string;
  available: boolean;
  stock: number;
  category: string;
  tags: string[];
  rating?: number;
  reviews?: number;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  icon: string;
  features: string[];
  pricing?: {
    starting: number;
    description: string;
  };
  image?: string;
  popular?: boolean;
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  bio?: string;
  photo: string;
  email?: string;
  phone?: string;
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
  };
  expertise?: string[];
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
  featured?: boolean;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service?: string;
}

// Quote Request Types
export interface QuoteRequest {
  productId: string;
  productName: string;
  rentalPeriod: "daily" | "weekly" | "monthly" | "yearly";
  duration: number;
  startDate: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  additionalNotes?: string;
}

// Filter Types for Products
export interface ProductFilters {
  brand?: string;
  type?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  availability?: boolean;
  search?: string;
  sortBy?: "name" | "price-low" | "price-high" | "rating" | "newest";
}

// Pagination Types
export interface Pagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}

// Blog Post Types (jika ada blog di future)
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readTime?: number;
}

// Notification Types
export interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

// API Response Types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
  };
  pagination?: Pagination;
}

// Navigation Link Types
export interface NavLink {
  href: string;
  label: string;
  icon?: string;
  children?: NavLink[];
}

// Company Timeline Types
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}

// Pricing Tier Types
export interface PricingTier {
  id: string;
  name: string;
  description: string;
  features: string[];
  priceMonthly: number;
  priceYearly: number;
  popular?: boolean;
  cta?: string;
}

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
}

// Company Value Types
export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Statistics Types
export interface Statistic {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  icon?: string;
}

// Address Types
export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  full: string;
}

// Business Hours Types
export interface BusinessHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

// Social Media Types
export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

// Modal State Types
export interface ModalState {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  onClose: () => void;
}

// Form Errors Types
export type FormErrors<T> = {
  [K in keyof T]?: string;
};

// Theme Types
export type Theme = "light" | "dark";

// Component Props Base Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
}

export interface CardProps extends BaseComponentProps {
  variant?: "default" | "bordered" | "elevated" | "glass";
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

export interface InputProps extends BaseComponentProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface SelectProps extends BaseComponentProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
