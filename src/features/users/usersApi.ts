import { createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";
import { defaultUserType, defaultFollowerType, defaultRepoType } from './user';

const baseURL=process.env.REACT_APP_BASE_URL;


export const fetchFollowersAsync=createAsyncThunk("github_user/fetchFollowers",async(url:string)=>{
    const res=await axios.get<defaultFollowerType[]>(url);
    return res.data;
})

export const fetchReposAsync=createAsyncThunk("github_user/fetchRepos", async(url:string)=>{
    const res=await axios.get<defaultRepoType[]>(url);
    return res.data;
})

export const searchUsersAsync=createAsyncThunk("github_user/fetchUser",async(searchedData:string)=>{
    console.log("searchUser started");
        const res=await axios.get<defaultUserType>(`${baseURL}/users/${searchedData}`);
        const user= res.data;
        const {followers_url,repos_url}=user;
        const resFollowers=await axios.get<defaultFollowerType[]>(`${followers_url}?per_page=100`);
        const followers= resFollowers.data;
        const resRepos=await axios.get<defaultRepoType[]>(`${repos_url}?per_page=100`);
        const repos=resRepos.data;
         return {user,followers,repos};
})

export const checkRequest=createAsyncThunk("github_user/checkRequest", async()=>{
    const res=await axios.get(`${baseURL}/rate_limit`);
    return res.data;
})




