import { v4 as uuid } from "uuid";
import MensCategory from './Images/woman.webp'
import WomensCategory from './Images/manCard.webp'
import KidsCategory from './Images/accessoriesCard.webp'
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Women",
    description:"Cloths 2023",
    img: MensCategory
  },
  {
    _id: uuid(),
    categoryName: "Men",
    description:"Cloths 2023",
    img: WomensCategory
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    description:"New Trend",
    img: KidsCategory
  },
];
