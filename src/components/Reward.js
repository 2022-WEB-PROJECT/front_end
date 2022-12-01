import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { CgShoppingCart } from "react-icons/cg";
import Modal from "react-bootstrap/Modal";

export default function Reward() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <b>
        <h4>리워드 선택</h4>
      </b>
      <Card className="w-50">
        <Card.Body>
          <input type="radio" name="yee" />
          <Badge bg="info">12개 남음</Badge>{" "}
          <b>
            <h4>35000원</h4>
          </b>
          <ul>
            <li>리워드 1</li>
          </ul>
        </Card.Body>
      </Card>
      <br />
      <Card className="w-50">
        <Card.Body>
          <input type="radio" name="yee" />
          <Badge bg="info">12개 남음</Badge>{" "}
          <b>
            <h4>70000원</h4>
          </b>
          <ul>
            <li>리워드 2</li>
          </ul>
        </Card.Body>
      </Card>
      <br />
      <Card className="w-50">
        <Card.Body>
          <input type="radio" name="yee" />
          <Badge bg="info">12개 남음</Badge>{" "}
          <b>
            <h4>70000원</h4>
          </b>
          <ul>
            <li>리워드 3</li>
          </ul>
        </Card.Body>
      </Card>
      <br />
      <b>
        <h5>색상</h5>
      </b>
      <select name="" id="">
        <option value="1">선택 1</option>
        <option value="2">선택 2</option>
        <option value="3">선택 3</option>
      </select>
      <br />
      <br />
      <b>
        <h5>디자인</h5>
      </b>
      <select name="" id="">
        <option value="1">디자인 1</option>
        <option value="2">디자인 2</option>
        <option value="3">디자인 3</option>
      </select>
      <br />
      <Button variant="outline-dark">
        <CgShoppingCart />
      </Button>
      <Button variant="outline-dark" onClick={handleShow}>
        결제하기
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        {/* <Modal.Header closeButton>
          <Modal.Title>결제하기 화면으로 넘어가시겠습니까?</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>결제하기 화면으로 넘어가시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
              window.open("/test1", "test", "_blank");
              window.location.replace("/");
              // goMain();
            }}
          >
            확인
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <ToggleButtonGroup
        type="radio"
        name="options"
        defaultValue={1}
        vertical="true"
      >
        <ToggleButton id="tbg-radio-1" value={1}>
          {/* Radio 1 *
          <Card>
            <Card.Body></Card.Body>
          </Card>
        </ToggleButton>
        <br />
        <ToggleButton id="tbg-radio-2" value={2}>
          Radio 2
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Radio 3
        </ToggleButton>
      </ToggleButtonGroup> */}
      <p></p>
    </div>
  );
}
