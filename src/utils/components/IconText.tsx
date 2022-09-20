import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const IconText = (props:IconTextPropsType) => {
    const {styles,fontAwesomeIcon,title}=props;

  return (
    <section className={styles.companyName}>
    {/* <i className="fa-solid fa-building"></i> */}
    <FontAwesomeIcon icon={fontAwesomeIcon} 
       className={[styles.faSolid].join(" ")}
      />   
    <span>{title}</span>
  </section>
  )
}

interface IconTextPropsType{
styles:{readonly [key:string]:string;};
fontAwesomeIcon:IconDefinition;
title:string;
}

export default IconText
