import React, { useEffect } from "react";
import styles from "./user.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLocation,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/users/usersSlice";
import IconText from "../../utils/components/IconText";
const User = () => {
  const { login, avatar_url, twitter_username, bio, company, blog, location } =
    useSelector(selectUser);


  return (
    <section className={styles.user}>
      <section className={styles.userTop}>
        <section className={styles.imgName}>
          <img className={styles.userAvatar} src={avatar_url} alt="" />
          <article className={styles.nameTwitter_userName}>
            <span className={styles.name}>{login}</span>
            <span className={styles.twitter_userName}>{twitter_username}</span>
          </article>
        </section>
        <button className={styles.followBtn}>Follow</button>
      </section>

      <span className={styles.bio}>{company}</span>

      <article className={styles.companyInfo}>
        <IconText
          {...{
            styles,
            fontAwesomeIcon: faBuilding,
            title: company || "always-learning",
          }}
        />

        <IconText
          {...{
            styles,
            fontAwesomeIcon: faLocation,
            title: location || "earth",
          }}
        />

        <IconText
          {...{
            styles,
            fontAwesomeIcon: faLink,
            title: blog || "https:://github.com",
          }}
        />
      </article>
    </section>
  );
};

export default User;
