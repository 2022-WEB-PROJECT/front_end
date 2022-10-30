export default function Detail() {
  let money = 10000;
  let people = 15;
  let day = 7;
  let t_money = 600000;
  let start_date = new Date(2022, 9, 21);
  let end_date = new Date(2022, 10, 4);
  console.log(start_date);
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <h2>회사 이름</h2>
      <img src="https://via.placeholder.com/320x320" alt="" />

      <h3>투자 금액</h3>
      <h4>
        <b>{comma(money)}원</b>
      </h4>
      <br />
      <h3>투자자</h3>
      <h4>
        <b>{comma(people)}명</b>
      </h4>
      <br />
      <h3>남은 기간</h3>
      <h4>
        <b>{day}일</b>
      </h4>
      <hr />
      <p>목표 금액&nbsp; {comma(t_money)}원</p>
      <p>
        펀딩 기간&nbsp; {start_date} ~ {end_date}
      </p>
    </div>
  );
}
