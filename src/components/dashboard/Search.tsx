import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { checkRequest, searchUsersAsync } from '../../features/users/usersApi';
import { selectRequests, selectStatus } from "../../features/users/usersSlice";
import Button from "../../utils/components/Button";
import styles from "./search.module.css";

const Search = () => {
const [searchRequestStatus,setSearchRequestStatus]=useState("idle");
  const {rate:{limit,remaining}}=useSelector(selectRequests);

  const [search, setSearch] = useState<string>("");

    const status=useSelector(selectStatus);
  const dispatch = useAppDispatch();

 const searchGithubUser=async ()=>{
  if(search){
    setSearchRequestStatus("pending");
    try {
     
      await dispatch(searchUsersAsync(search)).unwrap();
      await dispatch(checkRequest());
      setSearch("");
    setSearchRequestStatus("succeeded");

    } catch (error) {
      console.log("An error occured to search-request");
    setSearchRequestStatus("failed");
      
    }finally{
    setSearchRequestStatus("idle");

    }
  }
 }

  return (
    <section className={styles.searchReqBox}>
      <section className={styles.search}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={[styles.faMagnifyingGlass].join(" ")}
        />
        <input
          className={styles.searchInput}
          placeholder="Enter Github User"
          value={search}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setSearch(e.currentTarget.value)
          }
        />
        <Button
          type="button"
          className={styles.searchBtn}
          onClick={searchGithubUser}
        >
          Search
        </Button>
      </section>
      <span className={styles.request}>Request : {remaining} / {limit}</span>
    </section>
  );
};

export default Search;
/*
BESTPRACTISE MODULE.CSS LERDE BIR ELEMENTTE BIRDEN FAZLA CLASS NASIL KULLANILIR
<div className={[styles.App, styles.bold, styles['d-flex-c']].join(' ')}>
FONT-AWESOME U MODULE.CSS ILE BERABER BIRDEN FAZLA CLASS ILE NASIL
KULLANIRIZ
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlass } from '@fortawesome/free-sol
import useState from 'react';
import useState from 'react';

  <FontAwesomeIcon icon={faMagnifyingGlass} 
           className={[styles.faMagnifyingGlass, styles.faSolid].join(" ")}
          />     

     search.module.css icinde 

       .faMagnifyingGlass {
    font-size: 1rem;
    color: #617d98;
  color:red;
    margin-left: 0.5rem;
  }
.faSolid {
    color:yellow;
}
 
*/
