import { createSlice } from "@reduxjs/toolkit";
import { checkRequest, searchUsersAsync } from './usersApi';

//Redux-toolkit, asenkron islemleri api den data getirmeyi saglayan, fonksiyonlari
//dogrudan lokal state islemimizi yaptigimiz, slice lari icindeki extrareducer lar
//aracilgii ile bizim onlari, lokal state te aktarabilmemizi sagliyorlar
//import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../app/store";
import { sortedDataByLanguageType, sortedDataByRepoNameType } from "../../utils/charts";
import { defaultFollowers } from "./defaultData/followers";
import { defaultRepos } from "./defaultData/repos";
import { defaultUser } from './defaultData/user';
import { defaultFollowerType, defaultRepoType, defaultUserType } from './user';

interface initialStateType {
    users:defaultUserType[];
    user:defaultUserType,
    followers:defaultFollowerType[],
    repos:defaultRepoType[],
    status:'idle' | 'loading' | 'succeeded' | 'failed';
    error:string;
    requests:requestsType;
}

interface requestsType {
  resources?:any;
  rate:rateType;
}

interface rateType{
 [key:string]:number | string
}


 const initialState:initialStateType={
    users:[] as defaultUserType[],
    user:defaultUser,
    followers:defaultFollowers,
    repos:defaultRepos,
    status:"idle",
    error:"",
    requests:{
      resources:{},
      rate:{
        limit:60,
        remaining:60,
      }
    }
}

 const usersSlice=createSlice({
    name:"github_user",
    initialState,
    reducers:{
 }
,extraReducers(builder){
  builder
  .addCase(searchUsersAsync.pending, (state,action)=>{
    state.status="loading";
  })
  .addCase(searchUsersAsync.fulfilled, (state,action)=>{
    state.user=action.payload.user;
    state.followers=action.payload.followers;
    state.repos=action.payload.repos;
    state.status="succeeded";
    

  })
  .addCase(searchUsersAsync.rejected, (state,action)=>{
     state.status="failed";
  })
  .addCase(checkRequest.pending, (state,action)=>{
      state.status="loading";
  })
  .addCase(checkRequest.fulfilled, (state,action)=>{
    state.status="succeeded";
    state.requests=action.payload;
  })
  .addCase(checkRequest.rejected, (state,action)=>{
    state.status="failed";
  })
}

})

export default usersSlice.reducer;

//any type lar rootState olacak yani tum state i bir obje icinde tutan state type i olacak

export const selectUser=(state:RootState)=>state.github_user.user;
export const selectFollowers=(state:RootState)=>state.github_user.followers;
export const selectReposByLanguage=(state:RootState)=>state.github_user.repos.reduce(getLanguage,[] as sortedDataByLanguageType[]);
export const selectReposByRepoName=(state:RootState)=>state.github_user.repos.reduce(getReposNameByStarAndFork,[] as sortedDataByRepoNameType[])
export const selectStatus=(state:RootState)=>state.github_user.status;
export const selectRequests=(state:RootState)=>state.github_user.requests;


function getReposNameByStarAndFork(arr:sortedDataByRepoNameType[], item:defaultRepoType){
  const {name,stargazers_count,forks_count}=item;
  if(name!==null){
      if(arr.length===0){
          arr.push({name,stars:stargazers_count,forks:forks_count})
      }else if(arr.some((item:sortedDataByRepoNameType)=>item.name===name)){
          arr=arr.map((item:sortedDataByRepoNameType)=>item.name===name ? {...item,stars:item.stars+stargazers_count, forks:item.forks+forks_count} : item)
      }else {
          arr.push({name,stars:stargazers_count,forks:forks_count})
      }
  }
  return arr;
}



function getLanguage(arr:sortedDataByLanguageType[],item:defaultRepoType){
  let { language,stargazers_count } = item;
  if (language !== null) {
    if ((arr.length===0)) {
      arr.push({language,value:1,star:stargazers_count});
    } else if(arr.some((item:sortedDataByLanguageType)=>item.language===language)) {
     arr= arr.map((item:sortedDataByLanguageType)=>item.language===language ? {...item,value:item.value+1,star:item.star+stargazers_count} : item )
    }else {
        arr.push({language,value:1,star:stargazers_count});
    }
  }
  
  return arr;//her seferinde obje basa donuyor ve en son bu obje ne ise 
  //result2 de o olarak donecek
  }


