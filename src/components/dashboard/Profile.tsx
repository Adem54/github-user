import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./profile.module.css";

const Profile = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();
 console.log("isAuthtenticated: ",isAuthenticated);
 console.log("isLoading: ",isLoading);
 console.log("user: ",user);
  return (
    <section className={styles.profile}>
      <img className={styles.profileImg} src={user?.picture} alt="profile" />
      <article className={styles.greeting}>
        {" "}
        <span>welcome,</span>{" "}
        <span className={styles.userName}>{user?.name}</span>
      </article>
      <button
        className={styles.logout}
        onClick={() => {
          logout();
          // navigate("/");Buna gerek yok ki zaten ana sayfami dashobard sayafmiz private route ile korunuyor
          //ordaki her render da isAuthenticated olup oolmadigi kontrol edilior eger authentica degil ise
          //o zaman zaten login sayfasina gonderecek
        }}
      >
        Logout
      </button>
    </section>
  );
};

export default Profile;
