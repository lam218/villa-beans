import React from "react";
import Image from "./children/image";
import LikeButton from "./children/like_button";
import CommentBlock from "./children/comment_block";
import styles from "./styles";
import UserCaption from "./children/user_block/children/user_caption";
import UserInfo from "./children/user_block/children/user_info";

const App = (props) => {
  const { data } = props;
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <UserInfo user={data.owner} location={data.location} />
        <div style={styles.scrollableArea}>
          <UserCaption data={data.edge_media_to_caption} />
          <CommentBlock data={data.edge_media_to_comment} />
        </div>
        <div style={styles.bottomInfo}>
          <div style={styles.likeCount}>{data.edge_media_preview_like.count} likes</div>
          <LikeButton hasLiked={data.viewer_has_liked} size={"large"} />
        </div>
      </div>
    </main>
  );
};

export default App;
