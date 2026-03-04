
export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: 'Meditación' | 'Yoga' | 'Crecimiento Espiritual' | 'Bienestar';
  excerpt: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number; // Rating out of 5
}

export type CartItemType = 'product' | 'class' | 'event';

export interface CartItem {
    id: string;
    name:string;
    price: number;
    imageUrl: string;
    quantity: number;
    type: CartItemType;
    details?: string;
}

export interface BookingDetails {
    type: 'class' | 'event';
    title: string;
    price: number;
    imageUrl: string;
}