import {useState} from 'react';
var bag;
var bag1;
var Countnote=0;
function NoteBook({image,name}){
    const [note,Setnote]=useState(0)
    return <div className='box2'>
        <img id='pic' src={image}></img>
        <p>{name}</p>
        <h4>Quantity:{note}</h4>
        <button onClick={(e)=>{
            bag1=Setnote(note+1);
            Countnote=Countnote+1;
            localStorage.setItem("notebook",Countnote)
        return bag1;
      }}>+</button>

      
          <button onClick={(e)=>{
              if(note<=0){
                  return
              }
              bag=Setnote(note-1);
              Countnote=Countnote-1
              localStorage.setItem("notebook",Countnote);
              return bag
          }}>-</button>
    </div>
}


export {NoteBook}