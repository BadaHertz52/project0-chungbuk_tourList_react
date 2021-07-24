import React from 'react';
const TourList = ({sight}) => {
  return(
    <div key={sight.tourNo}>
    <a href={sight.hmpg} title="홈페이지로 이동합니다." rel="_blank">
      <img src={sight.thumbImg} alt={sight.tourNam}></img>
    </a>
    <p>{sight.tourNam}</p>
    <p>{sight.adres}</p>
    <p>{sight.operTime}</p>
    <p>{sight.telno}</p>
    <div>
      {sight.intrcn}
    </div>
  </div>
  )
}
function TourComponent ({ onClick ,sights}){

  return(
    <>
      <section >
          <select id="tourList-select">
            <input list="tourList" id="tourList-choice" name="tourList-choice" value="관광 유형" />
              <option value="none">=== 선택 ===</option>
              <option value="박물관" >박물관</option>
              <option   value="체험" >체험</  option>
              <option value="공원/유원지" >공원/유원지</option>
              <option value="산/계곡">산/계곡</option>
          </select>
          <button onClick={onClick} >조회</button>
      </section>
      <section >
        {sights.map (sight=> <TourList sight={sight} />)}
      </section>
    </>
  )
}


export default TourComponent;