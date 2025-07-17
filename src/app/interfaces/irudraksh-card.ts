export interface IRudrakshCard {
    name: string;
    brief: string;
    price: number;
    discount: number | null;
    discountedPrice: number | null;
    imageURL: string;
  }
