export class Food {
  id!: string; // the ! sign is  = require. must have this value
  name!: string;
  price!: number;
  tags?: string[]; // the ? sign is  = optional. this value is not mandatory
  favorite!: boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
}
