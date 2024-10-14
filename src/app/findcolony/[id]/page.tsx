"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { findColonyData } from "../../../data/dummey";

const PostDetailPage = ({ params }: { params: { id: string } }) => {
  const post = findColonyData.find((post) => post.id === Number(params.id));

  if (!post) {
    console.log(post);
    return <div>게시글을 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.dec}</p>
    </div>
  );
};

export default PostDetailPage;
