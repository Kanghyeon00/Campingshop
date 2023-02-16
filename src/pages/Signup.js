import Button from "react-bootstrap/Button";

function Signup() {
  return (
    <div className="createBox">
      <div className="createContent">
        <p>아이디</p>
        <input type="text" />
        <p>비밀번호</p>
        <input type="password" />
        <p>비밀번호 확인</p>
        <input type="password" />
        <p>이름</p>
        <input type="text" />
        <p>생년월일</p>
        <input type="date" />
        <div className="radio">
          <input type="radio" name="gender" />
          남자
          <input type="radio" name="gender" />
          여자
        </div>
        <Button type="submit" variant="outline-dark">
          회원가입
        </Button>
      </div>
    </div>
  );
}

export default Signup;
