import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import { Book } from './components/Books';
import {Pens} from './components/Pens';
import {NoteBook} from './components/Notebook'
function App() {
const book=[{
  image:"https://rukminim2.flixcart.com/image/612/612/kjbr8280-0/book/z/r/9/learning-how-to-fly-original-imafyx6zuhvfhv94.jpeg?q=70",
  name:"Learning how to fly"
},
{
  image:"https://rukminim2.flixcart.com/image/612/612/krxtrww0/book/g/8/1/how-to-win-friends-and-influence-people-original-imag5m73dmc8bzhd.jpeg?q=70",
  name:"How to win"
}];
  

const pen=[{
  image:"https://rukminim2.flixcart.com/image/612/612/kx50gi80/pen/q/u/q/118998-hauser-original-imag9nzujcrp9tyc.jpeg?q=70",
  name:"Ball pen"
},
{
  image:"https://rukminim2.flixcart.com/image/612/612/kiqbma80-0/pen/m/y/s/cel1008858-cello-original-imafyg6ygf4jz3zz.jpeg?q=70",
  name:"Fountain Pen"
}];

const notebooks=[{
  image:"https://rukminim2.flixcart.com/image/612/612/keokpe80/diary-notebook/k/6/m/classmate-02105002-original-imafvbyguq5v7hkn.jpeg?q=70",
  name:"Classmate"
},
{
  image:"https://rukminim2.flixcart.com/image/612/612/k7usyvk0/diary-notebook/f/g/d/navneet-youva-full-bound-15-5x18-8-cm-single-line-brown-23281-original-imafpzsfxgpf4fns.jpeg?q=70",
  name:"Brown Regular"
}
];


var sum=0;
const packet1=JSON.parse(localStorage.getItem("book"))
const packet2=JSON.parse(localStorage.getItem("notebook"))
const packet3=JSON.parse(localStorage.getItem("pen"))
 sum=packet1+packet2+packet3
// packet.reduce((acc,cur)=>{
//   return cur;
// })
var count=0;
  return (
    
    <div className="App">
 
    <div className='booky'>
  <h1>Book Section</h1>
      {book.map((e)=>(
      <Book image={e.image} name={e.name}></Book>
      ))
      
      }
        
    </div>

      <div className='Penny'>
        <h1>Pen section</h1>
        {
          pen.map((e)=>(
          <Pens image={e.image} name={e.name}></Pens>
           
          ))
          }
      </div>
 

   <div>
     <h1>NoteBook Section</h1>
     {notebooks.map((e)=>(
         <NoteBook image={e.image} name={e.name}></NoteBook>
       ))
     }
   </div>
   <h3>TOTAL ITEMS  {sum}</h3>

    </div>
  )
}

export default App;
