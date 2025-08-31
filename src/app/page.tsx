'use client';
import { useState, useEffect } from "react";
import ComponentTable from "@/components/Table";
import { URL } from "@/utils";


export default function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = async (): Promise<IPost[]> => {
    const response = await fetch(`${URL}/posts`);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      console.log('posts', posts)
      setPosts(posts);
    };

    fetchData();
  }, []);

  return (
    <>
      <ComponentTable posts={posts} isTitle={true} />
    </>
  );
}