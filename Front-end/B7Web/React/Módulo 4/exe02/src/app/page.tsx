"use client"

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostList } from "@/components/PostList";
import { PostProvider } from "@/contexts/PostContext";

const Page = () => {
  return (
    <PostProvider>
      <div className="container mx-auto p-7">
        <Header />
        <PostList />
        <Footer />
      </div>
    </PostProvider>
    
  )
};

export default Page;