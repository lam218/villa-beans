import React from "react";
import styles from "../styles";

const UserInfo = ({ user, location }) => {
  return (
    <div style={styles.infoContainer}>
      <img src={user.profile_pic_url} alt={user.username} style={styles.image} />
      <div style={styles.infoText}>
        <p style={styles.username}>{user.username}</p>
        <p style={styles.location}>{location.name}</p>
      </div>
    </div>
  );
};

export default UserInfo;
