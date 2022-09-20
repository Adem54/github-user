import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const GithubBox = (props:githubBoxPropsType) => {
  const {styles,fontAwesomeIcon,title,resultNumber}=props;
  return (
    <article className={styles.reposBox}>
    <section className={styles.reposBoxIcon}>
      {/* <i className="fa-regular fa-clipboard"></i> */}
      <FontAwesomeIcon icon={fontAwesomeIcon} 
         className={[styles.faClipboard].join(" ")}
        />     
    </section>
    <section className={styles.reposBoxStas}>
      <span className={styles.reposBoxStasNum}>{resultNumber} </span>
      <span className={styles.reposBoxStasTxt}>{title}</span>
    </section>
  </article>
  )
}

interface githubBoxPropsType {
  //icerisinde artmaya acik olan dizi ler icin eger dizi belli bir formatta ise bu sekilde type i tanimlanabiliyor
  styles:{ readonly [key: string]: string; };//bu da styles in type durumudur ve bu sekilde tanimlanir bu cok onemli bunu bilelim, cok kullanacagiz..
  fontAwesomeIcon:IconDefinition;//bu font-awesome dan gliyor
  title:string;
  resultNumber:number;
}







export default GithubBox