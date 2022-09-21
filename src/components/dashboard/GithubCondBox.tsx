import {
  faArrowsSpin, faClipboard, faPeopleGroup,faUserPlus} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/users/usersSlice";
import GithubBox from "../../utils/components/GithubBox";
import styles from "./githCondNumber.module.css";
const GithubCondBox = () => {
  const { public_repos, public_gists, followers, following } =
    useSelector(selectUser);

  return (
    <section className={styles.stasContainer}>
      <GithubBox
        {...{
          styles,
          fontAwesomeIcon: faClipboard,
          title: "Repos",
          resultNumber:public_repos,
        }}
      />

      <GithubBox
        {...{
          styles,
          className:styles.reposBox,
          fontAwesomeIcon: faPeopleGroup,
          title: "Followers",
          resultNumber:public_gists,
        }}
      />

      <GithubBox
        {...{
          styles,
          fontAwesomeIcon: faUserPlus,
          title: "Following",
          resultNumber:followers,
        }}
      />

      <GithubBox
        {...{
          styles,
          fontAwesomeIcon: faArrowsSpin,
          title: "Gists",
          resultNumber:following,
        }}
      />
    </section>
  );
};

export default GithubCondBox;
