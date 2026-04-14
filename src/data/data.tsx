import type { Category, RatingBreakdown, Resource } from "../types/types";
import FlatwareIcon from "@mui/icons-material/Flatware";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HotelIcon from "@mui/icons-material/Hotel";
import { green } from "../styles/colors";
import type { Business } from "../types/types";

const iconStyle = { color: green, fontSize: 50 };

export const categories: Category[] = [
  {
    icon: <FlatwareIcon sx={iconStyle} />,
    label: "Restaurants & Bars",
    link: "restaurants-and-bars",
  },
  {
    icon: <ShoppingCartIcon sx={iconStyle} />,
    label: "Shopping",
    link: "https://www.website.com",
  },
  {
    icon: <HealthAndSafetyIcon sx={iconStyle} />,
    label: "Health & Medical",
    link: "https://www.website.com",
  },
  {
    icon: <TheaterComedyIcon sx={iconStyle} />,
    label: "Theaters",
    link: "https://www.website.com",
  },
  {
    icon: <FitnessCenterIcon sx={iconStyle} />,
    label: "Spas & Gyms",
    link: "https://www.website.com",
  },
  {
    icon: <HotelIcon sx={iconStyle} />,
    label: "Hotels & Travel",
    link: "https://www.website.com",
  },
];

export const businesses: Business[] = [
  {
    id: "1",
    name: "Hudson Taco",
    title: "Waterfront Mexican Street Food",
    description:
      "Lively taco spot on the Newburgh waterfront with outdoor seating and margaritas.",
    location: "Newburgh, NY",
    address: "27 Front St, Newburgh, NY",

    heroImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    ],

    rating: 4.2,
    numReviews: 3,

    ratingBreakdown: {
      seating: 3,
      bathrooms: 3.5,
      accessibility: 4,
      staffTreatment: 4.5,
    } as RatingBreakdown,

    reviews: [
      {
        id: "r1",
        author: "Jess",
        rating: 4,
        bodySize: "midfat",
        comment:
          "Outdoor seating was comfortable but indoor chairs felt a bit tight.",
        ratings: {
          seating: 3,
          staffTreatment: 5,
        },
        createdAt: "2026-04-01",
      },
      {
        id: "r2",
        author: "Monique",
        rating: 3,
        bodySize: "infinifat",
        comment:
          "Booths were not accessible for me, but staff was kind and accommodating.",
        ratings: {
          seating: 2,
          accessibility: 3,
          staffTreatment: 5,
        },
        createdAt: "2026-04-03",
      },
      {
        id: "r3",
        author: "Alex",
        rating: 5,
        bodySize: "smallfat",
        comment: "Great vibes, no issues at all with seating.",
        ratings: {
          seating: 5,
        },
        createdAt: "2026-04-05",
      },
    ],

    inclusivityScore: {
      smallfat: 5,
      midfat: 4,
      infinifat: 3,
    },

    tags: ["outdoor seating", "tight booths", "waterfront"],
  },

  {
    id: "2",
    name: "Ms. Fairfax",
    title: "Modern American Eatery",
    description:
      "Trendy New American restaurant with a cozy but stylish interior.",
    location: "Newburgh, NY",
    address: "105 Liberty St, Newburgh, NY",

    heroImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    ],

    rating: 3.8,
    numReviews: 2,

    ratingBreakdown: {
      seating: 2.5,
      bathrooms: 3,
      accessibility: 2,
      staffTreatment: 4,
    } as RatingBreakdown,

    reviews: [
      {
        id: "r4",
        author: "Danielle",
        rating: 3,
        bodySize: "infinifat",
        comment:
          "Very tight seating and tables are close together. Food was amazing though.",
        ratings: {
          seating: 2,
          accessibility: 2,
        },
        createdAt: "2026-04-02",
      },
      {
        id: "r5",
        author: "Chris",
        rating: 4.5,
        bodySize: "smallfat",
        comment: "Loved the atmosphere, no issues for me personally.",
        ratings: {
          seating: 4,
        },
        createdAt: "2026-04-06",
      },
    ],

    inclusivityScore: {
      smallfat: 4.5,
      midfat: 3.5,
      infinifat: 2.5,
    },

    tags: ["tight seating", "trendy", "dim lighting"],
  },

  {
    id: "3",
    name: "Cosimo's Brick Oven",
    title: "Italian Restaurant & Bar",
    description:
      "Spacious Italian restaurant known for brick oven pizza and large dining areas.",
    location: "Newburgh, NY",
    address: "1209 NY-300, Newburgh, NY",

    heroImage: "https://images.unsplash.com/photo-1544148103-0773bf10d330",
    images: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    ],

    rating: 4.7,
    numReviews: 3,

    ratingBreakdown: {
      seating: 5,
      bathrooms: 4,
      accessibility: 5,
      staffTreatment: 5,
    } as RatingBreakdown,

    reviews: [
      {
        id: "r6",
        author: "Tasha",
        rating: 5,
        bodySize: "infinifat",
        comment:
          "Finally a place with comfortable seating and space between tables!",
        ratings: {
          seating: 5,
          accessibility: 5,
        },
        createdAt: "2026-04-04",
      },
      {
        id: "r7",
        author: "Luis",
        rating: 4.5,
        bodySize: "midfat",
        comment: "Very roomy, felt comfortable the whole time.",
        ratings: {
          seating: 5,
        },
        createdAt: "2026-04-06",
      },
      {
        id: "r8",
        author: "Erin",
        rating: 4.5,
        bodySize: "superfat",
        comment: "Accessible entrance and sturdy chairs made a big difference.",
        ratings: {
          seating: 5,
          accessibility: 5,
        },
        createdAt: "2026-04-07",
      },
    ],

    inclusivityScore: {
      smallfat: 4.5,
      midfat: 4.5,
      infinifat: 5,
    },

    tags: ["spacious", "accessible", "large tables"],
  },
];

export const navItems = [
  { label: "Home", path: "" },
  { label: "About", path: "about" },
  { label: "Fatergories", path: "fatergories" },
  { label: "Resources", path: "resources" },
  { label: "Community Guidelines", path: "community-guide" },
  { label: "Contact", path: "contact" },
];

export const studies: Resource[] = [
  {
    title:
      "Accommodating patients with obesity in ambulatory care: A clinical environment checklist",
    description:
      'University of Indiana study that creates a clinical environmental checklist “with an aim to identify weaknesses in accommodating individuals of size"',
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11372463/",
    image: "https://images.unsplash.com/photo-1579037005241-a79202c7e9fd",
  },
  {
    link: "https://pubmed.ncbi.nlm.nih.gov/32127716/",
    description:
      "This study brings together global experts to examine how weight stigma negatively impacts people’s physical and mental health, as well as their access to fair treatment in healthcare, workplaces, and society.",
    title:
      "Joint International Consensus Statement for Ending Stigma of Obesity",
    image:
      "https://today.uconn.edu/wp-content/uploads/2021/06/AdobeStock_153848376-951x665.jpeg",
  },
];
export const advocacy: Resource[] = [
  {
    title: "NAAFA",
    description:
      "The National Association to Advance Fat Acceptance (NAAFA) is 'a multigenerational, intersectional social justice organization creating opportunity for big bodied people and building community for fat people and our loved ones.'",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApg57AnqyjbwiX7l6K0IPorHJrYG3Zc8EZg&s",
    link: "https://naafa.org/",
  },
];
export const articlesBlogs: Resource[] = [
  {
    title: "Fatergories - Understanding the Fat Spectrum",
    description: "Linda from fluffykittenparty explores the Fat Spectrum.",
    link: "https://fluffykittenparty.com/2021/06/01/fategories-understanding-smallfat-fragility-the-fat-spectrum/",
    image:
      "https://fluffykittenparty.com/wp-content/uploads/2019/10/8-april-international-feng-shui-awareness-day.png",
  },
  {
    title:
      "Larger Customers Share How To Hack The Anxiety Of Eating At A Restaurant",
    description:
      "Body acceptance coaches give their tips on resolving both practical matters (like seating logistics) and emotional struggles (like ordering while fearing judgment).",
    link: "https://www.huffpost.com/entry/restaurants-can-suck-if-youre-large-diners-reveal-how-to-hack-the-anxiety-of-eating-out_l_651723ace4b0a69113b4c97b",
    image:
      "https://img.huffingtonpost.com/asset/651c78d52200003200e3db2f.jpeg?ops=scalefit_1440&format=webp",
  },
  {
    title: "Weight stigma: As harmful as obesity itself?",
    description:
      "'The authors of this article assert that weight stigma can trigger changes in the body, such as increased cortisol levels, that lead to poor metabolic health and increased weight gain.'",
    image:
      "http://content.health.harvard.edu/wp-content/uploads/2023/04/098774ad-7bdb-4e47-ad72-2f541e1b775c.jpg",
    link: "https://www.health.harvard.edu/blog/weight-stigma-as-harmful-as-obesity-itself-202206022755",
  },
  {
    link: "https://www.nyc.gov/site/cchr/media/height-and-weight.page",
    title:
      "Height and Weight Protections in the New York City Human Rights Law",
    image:
      "https://www.nyc.gov/assets/cchr/images/content/pages/HeightWeight_WebGraphic.png",
    description:
      "'This page focuses on the height and weight provisions of the NYCHRL, which were signed into Law by Mayor Eric Adams on May 26, 2023, and took effect on November 26, 2023.'",
  },
];

export const books: Resource[] = [
  {
    title: "The Story of The Body Is Not An Apology by Sonya Renee Taylor",
    image: "https://m.media-amazon.com/images/I/91-QBnrB0qL._SL1500_.jpg",
    description:
      "'The Body Is Not an Apology offers radical self-love as the balm to heal the wounds inflicted by these violent systems.'",
    link: "https://www.sonyareneetaylor.com/the-body-is-not-an-apology",
  },
  {
    title:
      "Fearing the Black Body: The Racial Origins of Fat Phobia by Sabrina Strings",
    description:
      "'An important and original work, Fearing the Black Body argues convincingly that fat phobia isn’t about health at all, but rather a means of using the body to validate race, class, and gender prejudice.'",
    image: "https://m.media-amazon.com/images/I/81-DAuYt+9L._SL1500_.jpg",
    link: "https://www.amazon.com/Fearing-Black-Body-Racial-Origins/dp/1479886750/ref=sr_1_1?crid=1YYZ7PSYTZJAL&dib=eyJ2IjoiMSJ9._xycuRI7p3GO-i2dCn6tqL1labwLHjjrLoXVS3golgtxBGAUu8lpzwkv-EqzUy9gxGD9zK2goTsSgTAP55wcSI5cphCDLGmw1Z-4TMk9pIsrhBi-D8Nv1pyMh8qGqvIpUslALeP9zrWlQ_qqgm5kZ6PomDshG4KqzZGpJhkNNAffmnL5vu5610opic3tV1KycnU5qHcV6hdUuhXSUkeLyI0v7xj670AFtXcN1pe_vwc.2xjCbPOyBczhqbbg6Gw3jJxxVfHKRf4X_GPp1PC-3-0&dib_tag=se&keywords=fearing+the+black+body&qid=1776096162&s=books&sprefix=fearing+the+black+body%2Cstripbooks%2C109&sr=1-1",
  },
];

export const fatergories = ["Small", "Mid", "Large", "Super", "Infini"];

export const fatergoryData = [
  {
    name: "Small Fat",
    size: "Below roughly a US women’s size 18 (about 1X–2X)",
    description:
      "People in smaller fat bodies who may still benefit from some level of size privilege. They may not face as many physical accessibility barriers but can still experience stigma.",
  },
  {
    name: "Mid Fat",
    size: "Approximately US sizes 18–24 (around 2X–3X)",
    description:
      "People who begin to experience more consistent barriers, such as difficulty with seating, clothing access, and public comfort.",
  },
  {
    name: "Large Fat",
    size: "Approximately US sizes 24–32 (around 3X–5X)",
    description:
      "Individuals who frequently encounter accessibility challenges in public spaces, including seating, transportation, and medical environments.",
  },
  {
    name: "Superfat",
    size: "Approximately US sizes 32–40+",
    description:
      "People in larger bodies who experience significant barriers in many areas of life, including limited access to safe seating, travel, and respectful treatment.",
  },
  {
    name: "Infinifat",
    size: "Beyond standard clothing size ranges",
    description:
      "People in the largest bodies who often face severe accessibility limitations and systemic exclusion in public and private spaces.",
  },
];
