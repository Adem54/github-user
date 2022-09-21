import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';
import { selectStatus } from '../../features/users/usersSlice';
import Loading from '../../utils/loading';
import Charts from './charts/Charts';
import styles from "./content.module.css";
import Followers from './Followers';
import GithubCondBox from './GithubCondBox';
import Profile from './Profile';
import Search from './Search';
import User from "./User";
const Content = () => {
  const { user } = useAuth0();
  const status=useSelector(selectStatus);

   if(!user)return null;
  if(status==="loading"){
    return <Loading/>
  }
  return (
    <>
     <Profile/>
     <Search/>
   <GithubCondBox/>
   <section className={styles.userFollowersBox}>
    <User/>
    <Followers/>
    </section>
    <Charts/>
    </>
  )
}

export default Content
