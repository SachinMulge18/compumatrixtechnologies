import {
  NewYork,
  Chicago,
  Florida,
  Losangeles,
  Miami,
  home,
  renthome,
  security,
  Article1,
  Article2,
  Article3,
  Article4,
  Article5,
  Article6,
} from "../assets";
import { blogs1, blogs2, blogs3, blogs4 } from "../assets/blogsImages";

export const properties = [
  {
    propertyTitle: "Find Properties in These Cities",
    propertySubTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        id: 1,
        cityName: "NewYork",
        cityImage: NewYork,
        numberOfProperties: 8,
      },
      {
        id: 2,
        cityName: "Chicago",
        cityImage: Chicago,
        numberOfProperties: 2,
      },
      {
        id: 3,
        cityName: "Los Angeles",
        cityImage: Losangeles,
        numberOfProperties: 1,
      },
      {
        id: 4,
        cityName: "Miami",
        cityImage: Miami,
        numberOfProperties: 2,
      },
      {
        id: 5,
        cityName: "Florida",
        cityImage: Florida,
        numberOfProperties: 3,
      },
    ],
  },
];

export const workWithUs = [
  {
    title: "Why You Should Work With Us",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        image: security,
        imageTitle: "Wide Range of Properties",
        imageSubTitle:
          "We offer expert legal help for all related property items in Dubai.",
      },
      {
        image: home,
        imageTitle: "Buy or Rent Homes",
        imageSubTitle:
          "We sell your home at the best market price and very quickly as well.",
      },
      {
        image: renthome,
        imageTitle: "Trusted by Thousands",
        imageSubTitle:
          "We offer you free consultancy to get a loan for your new home.",
      },
    ],
  },
];

export const featuredProperties = [
  {
    id: 1,
    image: Article1,
    title: "Luxury Family Home",
    location: "1800-1818 79th St",
    price: "$395,000",
  },
  {
    id: 2,
    image: Article2,
    title: "Skyper Pool Apartment",
    location: "1020 Bloomingdale Ave",
    price: "$280,000",
  },
  {
    id: 3,
    image: Article3,
    title: "North Dillard Street",
    location: "4330 Bell Shoals Rd",
    price: "$250/month",
  },
  {
    id: 4,
    image: Article4,
    title: "Eaton Garth Penthouse",
    location: "7722 18th Ave, Brooklyn",
    price: "$180,000",
  },
  {
    id: 5,
    image: Article5,
    title: "New Apartment Nice Wiew",
    location: "42 Avenue O, Brooklyn",
    price: "$$850/month",
  },
  {
    id: 6,
    image: Article6,
    title: "Diamond Manor Apartment",
    location: "7802 20th Ave, Brooklyn",
    price: "$259,000",
  },
];

export const blogs = [
  {
    image: blogs1,
    category: "Apartment",
    date: "March 19, 2024",
    title: "Housing Markets That Changed the Most This Week",
  },
  {
    image: blogs2,
    category: "Apartment",
    date: "March 20, 2024",
    title: "Read Unveils the Best Canadian Cities for Biking",
  },
  {
    image: blogs3,
    category: "Office",
    date: "March 21, 2024",
    title: "10 Walkable Cities Where You Can Live Affordably",
  },
  {
    image: blogs4,
    category: "Shop",
    date: "March 22, 2024",
    title: "New Apartment Nice in the Best Canadian Cities",
  },
];
