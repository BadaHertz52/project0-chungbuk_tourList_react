import React, { useState } from 'react';
import { tourList } from '../api';
import TourComponent from '../component/TourComponent'

const  GetTourList = () => {
  const [sights ,setSights] = useState([ ]); 
  
  const onClick = () => {
    const notFind =document.querySelector('.notFind');
    notFind.classList.remove('on');
    const type_value =document.getElementById("tourList-type").value ; 
    const location_value =document.getElementById("tourList-location").value;
    if (type_value === "none" && location_value ==="none") {
      alert(" 검색 옵션을 선택하세요.")
    }
    if(type_value !=='none' && location_value !=='none'){
      setSights(tourList.filter(t => t.tourSe ===type_value && t.areaSe === location_value));
      if(sights.length === 0) {
      notFind.classList.toggle('on') ; 
    }
    }else if(type_value !=='none' && location_value === 'none'){
      setSights(tourList.filter( t => t.tourSe === type_value));
      
    }else {
      setSights(tourList.filter( t => t.areaSe === location_value));
    } ;


  };

  const moreInform = (e) =>{
    //보려는 sight on, 그 외는 sight off
    //이벤트가 발생한 객체의 부모 노드
    const target =e.target ;
    const parent  =target.parentNode.parentNode.parentNode.parentNode ; 
    const more = target.parentNode ;
    console.log(more);
    const closeBtn = parent.querySelector(".close_btn");
    const sights = document.querySelectorAll('.sight'); 
    function ShowMoreInform (){
      sights.forEach (sight => 
      sight === parent ? 
      sight.classList.toggle('on') : 
      sight.classList.toggle('off') 
      );
      closeBtn.classList.remove('off');
      more.classList.add('off')
    }
    target.addEventListener('click' , ShowMoreInform());
  };

  const closeInform  =(e) => {
    // sight on 인거를 sight, sight off 였던 걸 sight로 
    const target = e.target ;
    const more = target.parentNode.parentNode.querySelector('.more') ;
    const sights = document.querySelectorAll('.sight'); 

    function CloseMoreInform (){
      sights.forEach(sight => 
        sight.classList.contains('off') ? sight.classList.remove('off'): sight.classList.remove('on'));
      target.parentNode.classList.add('off');
      more.classList.remove('off');
    }
    target.addEventListener('click' ,CloseMoreInform())

  };
  return (
    <TourComponent 
      onClick ={onClick}
      sights={sights}
      moreInform={moreInform}
      closeInform = {closeInform}
    />
    )
} 


export default GetTourList ; 