import type { JSX } from "react";

export type Category = {
  icon: JSX.Element;
  label: string;
  link: string;
};

export type FiltersType = {
  fatergories: string;
};

export type BodySizeCategory = "smallfat" | "midfat" | "superfat" | "infinifat";

export interface RatingBreakdown {
  seating: number;
  bathrooms: number;
  accessibility: number;
  staffTreatment: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;

  bodySize?: BodySizeCategory;

  ratings?: Partial<RatingBreakdown>;
  createdAt: string;
}

export interface Business {
  id: string;
  name: string;

  // Display
  title?: string;
  description?: string;

  // Location
  location: string;
  address?: string;

  // Media
  heroImage?: string;
  images: businessImgType[];

  // Ratings
  rating: number;
  numReviews: number;
  ratingBreakdown?: RatingBreakdown;

  // Reviews
  reviews: Review[];

  inclusivityScore?: {
    smallfat: number;
    midfat: number;
    infinifat: number;
  };

  tags?: string[]; // ["booths", "tight seating", "accessible"]
}

export interface Resource {
  title: string;
  description: string;
  link: string;
  image: string;
  alt: string;
}

export interface businessImgType {
  img: string;
  alt: string;
}
