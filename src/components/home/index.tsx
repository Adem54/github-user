import loginImage from "../../assets/login-pana.png";
import styles from "./home.module.css";
//module.css kullanirken className ler arasindsa - olursa tanimiyor
//cok onemli dikkat edelim...cok zaman kaybettiriyor
//hatayi bulana kadar
import classNames from "classnames";
//Bu da bir kutuphane, sadece css leri className icinde
//kullanmak icin
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../../utils/loading";
const Home = () => {
  const { loginWithRedirect,isAuthenticated, isLoading} =
    useAuth0();
 
 
  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <Navigate to="dashboard" />;
  }
  return (
    <>
      {
        <main className={styles.mainlogin}>
          <section className={classNames(styles.loginsignup)}>
            <img className={styles.loginImg} src={loginImage} alt="" />
            <h1>github user</h1>
            <button
              className={classNames(styles.btnLoginSignup)}
              onClick={(e: any) => {
                loginWithRedirect();
              }}
            >
              Log in / sign up
            </button>
          </section>
        </main>
      }
    </>
  );
};

export default Home;
