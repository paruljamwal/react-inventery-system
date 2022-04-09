import {useState} from 'react';
import './Books.css'
var bag;
var bag1;
var Countbook=0;
function Book({image,name}){
   const [book,Setbook]=useState(0)
    return <div className='box'>
     
        <img id='pic' src={image}></img>
        <p>{name}</p>
          <h4>Quantity:{book}</h4>
          
      <button onClick={(e)=>{
        bag1=Setbook(book+1);
        Countbook=Countbook+1;
         localStorage.getItem("book",Countbook)

        return bag1;
      }}>+</button>
          <button onClick={(e)=>{
              if(book<=0){
                  return
              }
              bag=Setbook(book-1);
              Countbook=Countbook-1;
              localStorage.setItem("book",Countbook);
              return bag;
          }}>-</button>
      </div>
       
}



export {Book}