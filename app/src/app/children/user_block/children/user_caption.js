import React from "react";
import { getCaptionFromEdges } from "../../image/helpers";

const Comment = ({data}) => {
  const caption = getCaptionFromEdges(data);
  return (
    <>
      <p>{caption}</p>
    </>
  );
};

export default Comment;
