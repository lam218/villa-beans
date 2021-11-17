import React from "react";
import LikedIcon from "./children/liked_icon";
import styles from "./children/styles";
import UnlikedIcon from "./children/unliked_icon";

const LikeButton = ({ hasLiked, size }) => {
  return (
    <div style={styles.likedButton}>
      {hasLiked ? <LikedIcon size={size} /> : <UnlikedIcon size={size} />}
    </div>
  );
};

export default LikeButton;
