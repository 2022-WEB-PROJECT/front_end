import moment from "moment";
import Button from "react-bootstrap/Button";
import { useLocation, Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
export default function Detail() {
  let money = 10000;
  let people = 15;
  let day = 7;
  let t_money = 600000;
  let start_date = moment("2022.10.21").format("YYYY.MM.DD");
  let end_date = moment("2022.11.04").format("YYYY.MM.DD");
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const id = parseInt(useLocation().pathname.split("/")[2]);
  return (
    <div>
      <h2 style={{ "text-align": "center" }}>회사 1</h2>
      <div style={{ "margin-left": "150px" }}>
        <div style={{ float: "left" }}>
          <img
            /*src="https://via.placeholder.com/320x320"*/ src="https://cdn-icons-png.flaticon.com/512/4091/4091968.png"
            alt=""
          />
        </div>
        <div style={{ float: "left", "margin-left": "150px" }}>
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
          <p>
            결제&nbsp; 목표금액 달성시{" "}
            {moment(end_date).add(1, "days").format("YYYY.MM.DD")}에 결제 진행
          </p>
          <div>
            <Button variant="outline-dark">
              <IoNotificationsOutline />
            </Button>
            <Link to={"/reward/" + id} state={{ index: id }}>
              <Button
                variant="info"
                style={{
                  "margin-left": "25px",
                  width: "500px",
                  color: "white",
                }}
              >
                펀딩하기
              </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
