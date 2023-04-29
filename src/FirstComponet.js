import React, { useState } from 'react';

function FirstComponet(props) { 
    // using useState,we are able to update the data 
    const [data,updatedata] = useState(0);

    // increment the value 
    function clickbutton1(){
        if(data < 10){
            console.log(data);
            updatedata(data+1);
        }else{
            console.log("couting is end")
        }
    }
    // derement the value 
    function clickbutton2(){
        if(data >= 1){
            console.log(data);
            updatedata(data-1);
        }else{
            console.log("couting is end")
        }
    }
  return (
    <>
        <p>{data}</p>
        <button style={{background:"black",color:"white"}} onClick={()=>clickbutton1()}>
            incemenet counting
        </button>
        <button style={{background:"black",color:"white"}} onClick={()=>clickbutton2()}>
            decrement counting
        </button>
    </>
  )
}

export default FirstComponet