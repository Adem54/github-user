import React from 'react'
import  styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img className="loadingImg" src="https://c.tenor.com/opUD_-Ao_hcAAAAC/loading-go-on.gif" alt="loading"/>
    </div>
  )
}

export default Loading
