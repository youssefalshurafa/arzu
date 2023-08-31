import * as z from 'zod';

export const UserValidation = z.object({
  name: z.string().min(3).max(30),
  address: z.string().min(10).max(300),
  profile_photo: z.string().url().nonempty(),
});
