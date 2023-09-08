import * as z from 'zod';

export const ProductValidation = z.object({
  title: z.string().min(3).max(30),
  code: z.number().optional(),
  description: z.string().min(3).max(30).optional(),
  price: z.number().optional(),
  size: z.string().optional(),
  category: z.string().optional(),
  stock: z.number().optional(),
  thumbnail: z.string().url().optional(),
  images: z.array(z.string().url()).optional(),
});
