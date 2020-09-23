import React, { Component } from 'react';
 
const CatList = (props) => {
  console.log(props.breeds);
 return (
   <div>
     {props.breeds.map((cat, index) => <li key={index}>{cat}</li> )}
   </div>
 )
}
 
export default CatList;
