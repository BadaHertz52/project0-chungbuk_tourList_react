import React, { useState } from 'react';
import { tourList } from '../api';
import TourComponent from '../component/TourComponent'

const  GetTourList = () => {
  const [sights ,setSights] = useState([ ]); 
  
  const onClick = () => {
    const value =document.getElementById("tourList-select").value ; 
    if (value === "none") {
      alert("관광지 유형을 선택하세요.")
    }
    const FindSight = tourList.filter( t => t.tourSe === value);
    setSights(FindSight )

  };
  return (
    <TourComponent 
      onClick ={onClick}
      sights={sights}
    />
    )
} 


export default GetTourList ; 