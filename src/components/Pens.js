import './pens.css'
import {useState} from "react";
var Countpen=0;
var bag;
var bag1;
function Pens({image,name}){
    const [pen,Setpen]=useState(0);
    return <div className='box1'>
        <img id='pic' src={image}></img>
        <p>{name}</p>
        <h4>Quantity:{pen}</h4>
        <button onClick={(e)=>{
        bag1=Setpen(pen+1)
        Countpen=Countpen+1;
        localStorage.setItem("pen",Countpen);
        return bag1;
      }}>+</button>

      
          <button onClick={(e)=>{
              if(pen<=0){
                  return
              }
              bag=Setpen(pen-1);
              Countpen=Countpen-1;
              localStorage.setItem("pen",Countpen);
              return bag
          }}>-</button>
    </div>
}


export {Pens}