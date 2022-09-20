import React,{CSSProperties} from "react";

export interface styleType {
    flex:string; /* flex:0(flex-grow) 1(flex-shrink) 25%(flex-basis)*/
    display: string;
    height: string;
    borderRadius: string;
    backgroundColor: string;
    //  marginTop:"2rem",
    marginLeft: string;
    boxSizing: string;
}

type chartStypeType=CSSProperties | undefined ;




  export const getChartStyle=(flex:string):chartStypeType=>{
    return {
        flex, /* flex:0(flex-grow) 1(flex-shrink) 25%(flex-basis)*/
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        height: "24rem",
        borderRadius: "0.2rem",
        backgroundColor: "#fff",
         marginTop: "2rem",
        marginLeft: "1.6rem",
        boxSizing: "border-box",
        position:"relative",
      };
  }
