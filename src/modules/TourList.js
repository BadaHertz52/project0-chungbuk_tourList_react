import React, { useState } from 'react';
import { tourList } from '../api';
import TourComponent from '../component/TourComponent'

const  GetTourList = () => {
  const [sights ,setSights] = useState([ ]); 
  
  const onClick = () => {
    const value =document.getElementById("tourList-select").value ; 
    console.log('value?' , value);
    const FindSight = tourList.filter( t => t.tourSe === value);
    console.log("find" ,FindSight);
    setSights(FindSight )

  };
  console.log("sight", sights);
  return (
    <TourComponent 
      onClick ={onClick}
      sights={sights}
    />
    )
} 


export default GetTourList ; 