'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4">Home page</h1>
      <div className="flex gap-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}

export default Home
