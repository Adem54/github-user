import { useAuth0 } from "@auth0/auth0-react";
import styles from "./profile.module.css";
const Profile = () => {
  const {  logout, user } = useAuth0();

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
        }}
      >
        Logout
      </button>
    </section>
  );
};

export default Profile;
