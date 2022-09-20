import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import Profile from './Profile';
import Search from './Search';
import GithubCondBox from './GithubCondBox';
import User from "./User";
import Followers from './Followers';
import styles from "./content.module.css";
import Charts from './charts/Charts';
import {  selectStatus } from '../../features/users/usersSlice';
import { useSelector } from 'react-redux';
import Loading from '../../utils/loading';
const Content = () => {
    const navigate=useNavigate();
  const { loginWithRedirect, logout, isAuthenticated,isLoading,user } = useAuth0();
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
