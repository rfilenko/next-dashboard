'use client'

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Home page</h1>
      <p className="text-lg">Welcome to the home page</p>
      <Button onClick={() => { console.log('Button clicked') }}>Button</Button>
    </div>
  );
}

export default Home
