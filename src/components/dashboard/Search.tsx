import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { checkRequest, searchUsersAsync } from '../../features/users/usersApi';
import { useAppDispatch } from "../../app/hooks";
import Button from "../../utils/components/Button";
import { useSelector } from "react-redux";
import { selectRequests, selectStatus } from "../../features/users/usersSlice";

const Search = () => {
  /* Burda bir bestpractise durumu var, biz butona tikladigmiz zaman eger data getiriyor isek ki var olan 
  datayi degistirerek data getiriyor isek o zaman loading durumu cok onemlidir cunku biz butona tiklihyoruz
  once var olan data yi gosterip ardindan yeni gelen datayi gosteriyor hayir bunu istemiyoruz biz burda
  loading durumunu bir spinner ile gostererek bu islemi gerceklestirmek istiyoruz ki, eger redux-toolkiti
  biz extrareducer uzerinden kullanirsak o zaman, bu butona tiklayarak yapilan loading islemlerini biz,
  lokal component icinde state timizde tutabiliriz....Bu cok onemli bir konudur...
  */
const [searchRequestStatus,setSearchRequestStatus]=useState("idle");
  const {rate:{limit,remaining}}=useSelector(selectRequests);

  const [search, setSearch] = useState<string>("");

    const status=useSelector(selectStatus);
    console.log("statussssss: ",status);
  const dispatch = useAppDispatch();

  console.log("searchRequestStatus: ",searchRequestStatus);
 useEffect(()=>{
  //dispatch(checkRequest());
 },[])

 /* Burda redux-toolkit dersini dineldigm hoca daha farkli yaklasmisti pendin durumuna orda ornegin pending durumu direk try icine  yazildi
 succeed durumu hic yazilmadi, ve de finally de de tekrar idle durumuna getirilmisti...yani basa dondurulmustu...bu cok onemli bir bestpractise 
 dir bize cok lazim olacak...onemli...
 BU ARADA YINE COOK HAYATI BIR ISLEM YAPTIK BURDA...DIKKAT EDELIM COMPONENT ICINDE 
 DISPATCH ICERISINDE ASYNC METHOD INVOKE EDILIRKEN ASNYC AWAIT KULLANMAYI SAKIN UNUTMAYALIM..
 AWAIT KULLANMAZSAK DATAYI ALMADAN BIZE BOS GELIYOR DATA ARDINDAN GELIYOR 
 BUNU ISTEMIYORUZ...BU COOK ONEMLI...
 */
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
