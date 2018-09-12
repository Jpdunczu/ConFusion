// Class to define a dish.
// this is Typescript.
import { Comment } from './comment';

export class Dish {
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}