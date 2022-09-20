

export interface chartDataType {
    label:string;
    value:number;
    color?:string;
}

export interface sortedDataByLanguageType{
  language:string;
  value:number;
  star:number;
}



//obj type {label:string,value:string}
//The most
export const getMostUsedData=(arr:sortedDataByLanguageType[])=>{
    return   arr.map((item,index)=>{
             let label= item.language;
             let value=  item.value;
                return {label,value}   
       }).sort(function(a:any,b:any){
        return b.value - a.value
    });
   }

//Between the languages , the language that has the most star number
   export const getMostPopularData=(arr:sortedDataByLanguageType[])=>{
    return   arr.map((item,index)=>{
             let label= item.language;
             let value=  item.star;    
                return {label,value}   
       }).sort(function(a:any,b:any){
        return b.value - a.value
    });
   }

  export  interface sortedDataByRepoNameType{
    name:string;
    stars:number;
    forks:number;
  }
  

//After repo name
   export const getMostStarredRepoNames=(arr:sortedDataByRepoNameType[])=>{
    return arr.map((item,index)=>{
      let label=item.name;
      let value=item.stars;
      return {label,value,color:colors[index]}
    }).sort(function(a:any,b:any){
             return b.value - a.value
         });
   }


   export const getMostForkedRepoNames=(arr:sortedDataByRepoNameType[])=>{
    return arr.map((item,index)=>{
      let label=item.name;
      let value=item.forks;
      return {label,value}
    }).sort(function(a:any,b:any){
             return b.value - a.value
         });
   } 
  



    //Icinde objeler bulunan, dizi icinde siralama yapmak
  // export const result=(repos:Partial<chartDataType>,colors:colorType=[])=>getChartData(repos,colors).sort(function(a:any,b:any){
  //     return b.value - a.value
  // });

  export function getFirstFiveData(data:chartDataType[],colors=[] as string[]){
    if(colors.length>0 && data.length<=5){
      return data.map((item:chartDataType,index:number)=>{
        return {...item,color:colors[index]}
      })
    }else if(data.length<=5){
      return data;
    }else if(colors.length>0 && data.length>=5){
      return data.slice(0,5).map((item:chartDataType,index:number)=>{
        return {...item,color:colors[index]}
      });
    }else {
      return data.slice(0,5);
    } 
    
  }

  
 
  export const colors=["#5D62B5","#29C3BE","#F7A6A4","#FFDA7E","#62B58F","#BC95DF","#42cef5"]



interface chartConfigsParamsType {
    type:string;
    caption:string;
    numbersuffix?:string;//optional
    chartData:chartDataType[];
    width?:number | string;
    height?:number | string;
}



  export const chartConfigs =({type,caption,numbersuffix="",chartData}:chartConfigsParamsType)=> {
    return {
        type, // The chart type
       //  width: "470", //470 Width of the chart
        // height: "300", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            //Set the chart caption
            caption,
            theme: "fusion",
            showLegend:"0",
            showpercentvalues: "1",
            legendposition: "top",

            usedataplotcolorforlabels: "1",
          //  numbersuffix:numbersuffix || "",//bu horizontal ve vertical da var sadece,default olarak bosluk birakiriz verilmez ise bosluk birak
            numbersuffix,//bu horizontal ve vertical da var sadece,default olarak bosluk birakiriz verilmez ise bosluk birak
          
            showvalues: "1",

            captionFontColor: "#102a42",
   captionFontBold: 0,
   captionFontSize: 25,
   captionFont: "Roboto",
   baseFont: "Open Sans",
   baseFontSize: 16,
   baseFontColor: "#617d98",
   smartLineColor: "#617d98",
   showShadow: 0,
   showPlotBorder: 0,
   paletteColors:
     "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
   use3DLighting: 0,
   useDataPlotColorForLabels: 0,
   bgColor: "#FFFFFF",
   showBorder: 0,
   decimals: 0,
   pieRadius: "58%",//bunun ile pie ile doughnut grafiklerinin sayfa icinde buyuklugnu ayarlayabiliriz


   xAxisNameFontSize: 16,
   yAxisNameFontSize: 16,
   divLineAlpha: 45,


          },
          // Chart Data
          data: chartData
        }
      };
  }

