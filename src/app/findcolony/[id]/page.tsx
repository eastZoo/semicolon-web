"use client";

import { ColonyDetail } from "@/components/templates/ColonyDetail";
import { findColonyData } from "../../../data/dummey";

const PostDetailPage = ({ params }: { params: { id: string } }) => {
  const post = findColonyData.find((post) => post.id === Number(params.id));

  if (!post) {
    console.log(post);
    return <div>Loading...</div>;
  }

  return <ColonyDetail colony={post} />;
};

export default PostDetailPage;
