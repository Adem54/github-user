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

//Bu dogrudan comonent icinde kullanilacak, useDispatch icinde tetiklenecek, bu componentte tetiklendikten sonra
export const searchUsersAsync=createAsyncThunk("github_user/fetchUser",async(searchedData:string)=>{
    console.log("searchUser started");
        const res=await axios.get<defaultUserType>(`${baseURL}/users/${searchedData}`);
        const user= res.data;
        const {followers_url,repos_url}=user;
     //   const response=await axios.all([fetchReposAsync(repos_url), fetchFollowersAsync(followers_url)])
        // console.log("response:::::",response);
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



/*
Biz redux-toolkit te herhangi bir asenkron tetiklemee veya senkron tetikleme islemleirnin hepsini
useDispatch uzerinden yapabiliriz ve react-hook componenti icerisinde olmamiz gerekiyor ayrica....
Dolayisi ile de ayri ayri, biz, request islemi yapan, fonksiyonlarimizi olustururuz sonra
onlari component icinde dispatch yapariz
*/

// export const fetchAll=createAsyncThunk("github_user/fetchAll", async(searchedText:string)=>{
//     const url:string=`${baseURL}/searchedText`;
//    const user=await fetcUsersAsync(url);
//    const {followers_url,repos_url}:{followers_url:string,repos_url:string}=user;
// })
/*
Biz burda createAsyncThunk ile asenkron islemi ypainca, redux-toolkit bizim yerimize
slice icindeki extraReducer objesi altina, kendisi pending-loading, fullfilled-success,rejected-error islemlerin 
ayri ayri getirir, ve biz de state timizi ayri ayri guncellereiz...

Soru-1

Dogrudan axios istersek de bu sekilde yapip burdan getUsers i
usersSlice icinde creteAsyncThunk ile kullaniriz ve gelen datayi
lokal state timzdeki dataya aktaririz..Ve ana data olarak hep lokal 
data uzerinden yurumus oluruz..Ama suraya dikkat burda, bizim isLoading,isError,error,isSuccess
islemlerini kendimizin manuel olarak usersSlice icindeki initial data icinde olusturmamiz gerekir
Ancak bu tbi ki react-query de boyle degil, react-query de bunlar otomatik geliyor
*/



