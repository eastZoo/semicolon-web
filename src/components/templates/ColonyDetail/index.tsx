import { findColonyData } from "../../../data/dummey";

export const ColonyDetail = ({ params }: { params: { id: string } }) => {
  const post = findColonyData.find((post) => post.id === Number(params.id));

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.dec}</p>
    </div>
  );
};

export default ColonyDetail;
