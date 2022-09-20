import loginImage from "../../assets/login-pana.png";
import  styles from "./home.module.css";
//module.css kullanirken className ler arasindsa - olursa tanimiyor
//cok onemli dikkat edelim...cok zaman kaybettiriyor 
//hatayi bulana kadar
import classNames from "classnames";
//Bu da bir kutuphane, sadece css leri className icinde
//kullanmak icin
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate,Navigate} from "react-router-dom";
import Loading from "../../utils/loading";
const Home = () => {
  const navigate=useNavigate();
 // console.log("styles: ", styles);//Burasi bize, styles.module.css icinde yazilan, 
  //className lerin karsisina bir uniq id atamis bir sekilde getiriyor
  const { loginWithRedirect, logout, isAuthenticated,isLoading,user } = useAuth0();
  console.log("isAuthenticated: ",isAuthenticated);
  console.log("user: ", user);
  console.log("isLoading: ", isLoading);
/*
Login  e tiklayinca kendisi zaten hazir logoin sayfasina yonlendiriyor
sonra, orda login olunca tekrar login butonuna hangi sayfadan tikladi isek tekrar oraya donuyor
yani / ana sayfa da  yaptik biz login butonunu oraya donuyor, simdi bizim burda hemen kontrol yapmamiz
gerekiyor, ki isAuthenticated true olmus mu diye eger true ise o zaman bizi al sen dashboard sayfasina yonlendir 
demeliyiz
*/

if(isLoading){
  return <Loading/>
}

console.log("HOme Page dashboard::: page.... ")
  if(isAuthenticated){
    return <Navigate to="dashboard"/>
  }
  return (
    <>
    {<main className={styles.mainlogin}>
      <section className={classNames(styles.loginsignup)}>
        <img className={styles.loginImg} src={loginImage} alt="" />
        <h1>github user</h1>
        <button className={classNames(styles.btnLoginSignup)}
        onClick={(e:any)=>{
          loginWithRedirect();
         //login sayfasina gider..Ve kendisi otomatik login
         //url ile route ile geliyor zaten, burda data lar dogru ise
         //nerde birakti isek oraya gelecek
         
        }}
        >Log in / sign up</button>
      </section>
    </main>}
    
    </>
    
  );
};

export default Home;
