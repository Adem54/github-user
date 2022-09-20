import React from "react";
import { useSelector } from "react-redux";
import { selectFollowers } from "../../features/users/usersSlice";
import styles from "./followers.module.css";

const Followers = () => {
  const followers=useSelector(selectFollowers);
  return (
    <section className={styles.followersWrapper}>
      <section className={styles.followers}>
       
        {followers?.map((follower:any)=>(
          <section key={follower.id} className={styles.imgNameUrl}>
          <img
            className={styles.followerAvatar}
            src={follower.avatar_url}
            alt=""
          />
          <article className={styles.nameUrl}>
            <span className={styles.name}>{follower.login}</span>
            <a href="/" className={styles.url}>
              {follower.html_url}
            </a>
          </article>
        </section>
        ))}
      </section>
    </section>
  );
};

export default Followers;
