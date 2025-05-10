import { User } from "next-auth";

export const getUserRole = (user: User) => user.image?.includes('githubusercontent') ? 'user' : user.email === process.env.ADMIN_EMAIL ? 'admin' : 'user'