import React from 'react';
import '../css/TourComponent.css'; 
import { FiCalendar ,FiPhoneCall ,FiNavigation ,FiXSquare} from "react-icons/fi";
import { NameBlock } from './style';

const TourList = ({sight , moreInform ,closeInform}) => {
  let value ; 
  switch (sight.tourSe) {
    case "박물관":
      value = '#ffd899';
      break;
    case "체험" :
      value = '#a6ddf5' ;
    break;
    case "공원/유원지":
      value = 'rgb(255, 204, 213)';
      break;
    case "산/계곡" :
      value = 'rgb(148, 219, 170)' ;
      break;
    default:
      break;
    
  }
  return(
    <div className="sight " key={sight.tourNo}>
      <a href  className="close_btn off" onClick={closeInform}><FiXSquare/></a>
      <div className="m_css">
        <img src={sight.thumbImg} alt={sight.tourNm}></img>
        <NameBlock value ={value} >
          <section className="sight_name"> 
            <a href={sight.hmpg} title="홈페이지로    이동합니다." rel="_blank">
              {sight.tourNm}
            </a>
          </section>
          </NameBlock>
      </div>
      <div className="m_css">
        <section className="inform1">
          <p><FiNavigation/> {'\u00A0'} {sight.adres}</p>
          <p><FiCalendar/> {'\u00A0'} {sight.operTime}</p>
          <p><FiPhoneCall/>{'\u00A0'}{'\u00A0'}{sight.telno}</p>
        </section>
        <section className="inform2">
          <div>{sight.intrcn}</div>
          <div className="more">
            <a href onClick={moreInform} > ...더 보기... </a>
          </div>
        </section>
      </div>
    </div>
  )
}

function TourComponent ({ notFind, onClick ,sights ,moreInform ,closeInform}){

  return(
    <>
      <div className="header">충청북도 관광명소</div>
      <div className="inner" >
        <section className="tourList">
            <select id="tourList-type">
                <option value="none">=== 선택 ===</option>
                <option value="박물관" >박물관</option>
                <option   value="체험" >체험</  option>
                <option value="공원/유원지" >공원/유원지</option>
                <option value="산/계곡">산/계곡</option>
            </select>
            <select id="tourList-location">
              <option value="none">=== 선택 ===</option>
              <option value="충주시">충주시</option>
              <option value="보은군">보은군</option>
              <option value="단양군">단양군</option>
              <option value="청주시">청주시</option>
              <option value="괴산군">괴산군</option>
            </select>
            <button onClick={onClick}> click </button>
        </section>
        <section>
          <div className="notFind">
            "찾으시는 장소에 대한 정보가 없습니다."
          </div>
        </section>
        <section className="tourInform" >
          {sights.map (sight=> <TourList  sight={sight}  moreInform ={moreInform} close={closeInform}/>)}
        </section>
      </div>
    </>
  )
}


export default TourComponent;