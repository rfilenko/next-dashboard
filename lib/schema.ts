import { z } from "zod";

const UserDataSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name must be at most 50 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required').max(50, 'Password must be at most 50 characters'),

  // id: z.coerce.number().optional().default(0),
  // additionalInfo: z.object({
  //   role: z.enum(['user', 'admin'], {
  //     errorMap: () => ({
  //       message: 'Role is required',
  //     }),
  //   }),
  //   notifications: z.boolean().default(true),
  // }),
});

type UserSchema = z.infer<typeof UserDataSchema>;

export { UserDataSchema, type UserSchema };