import React from "react";
import LikeButton from "../../like_button";
import { getCommentFromEdges, gethasLikedFromEdges, getUsernameFromEdges } from "../helpers";
import styles from "../styles";

const Comment = (props) => {
    const {comment} = props;
  return (
    <div style={styles.comment}>
        <p style={styles.commentText}>
        <span style={styles.username}>{getUsernameFromEdges(comment)}</span>
      {getCommentFromEdges(comment)}
        </p>
      <LikeButton hasLiked={gethasLikedFromEdges(comment)} size={'small'} />
    </div>
  );
};

export default Comment;
