import React, { useState } from 'react';
import { tourList } from '../api';
import TourComponent from '../component/TourComponent'

const  GetTourList = () => {
  const [sights ,setSights] = useState([ ]); 
  
  const onClick = () => {
    const type_value =document.getElementById("tourList-type").value ; 

    const location_value =document.getElementById("tourList-location").value;
    if (type_value === "none" && location_value ==="none") {
      alert(" 검색 옵션을 선택하세요.")
    }
    if(type_value !=='none' && location_value !=='none'){
      setSights(tourList.filter(t => t.tourSe ===type_value && t.areaSe === location_value))
    }else if(type_value !=='none' && location_value === 'none'){
      setSights(tourList.filter( t => t.tourSe === type_value))
    }else {
      setSights(tourList.filter( t => t.areaSe === location_value)) 
    } 
  };
  return (
    <TourComponent 
      onClick ={onClick}
      sights={sights}
    />
    )
} 


export default GetTourList ; 