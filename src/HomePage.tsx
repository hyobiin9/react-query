import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts, getPostsByUsername } from "./api";

function HomePage(): JSX.Element {
  const username = "codeit";
  const { data: postsDataByUsername } = useQuery({
    queryKey: ["posts", username],
    queryFn: () => getPostsByUsername(username),
  });

  const posts = postsDataByUsername?.results ?? [];
  console.log(posts);

  console.log(postsDataByUsername);

  return (
    <div>
      <p>홈페이지</p>
      {posts.map((post: { id: number; content: string }) => (
        <div key={post.id}>{post.content}</div>
      ))}
    </div>
  );
}

export default HomePage;
