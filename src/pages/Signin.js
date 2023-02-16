import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Signin() {
  let navigate = useNavigate();

  return (
    <div className="loginBox">
      <div className="content">
        <p>아이디</p>
        <input type="text" name="id" />
        <p>비밀번호</p>
        <input type="password" name="password" />
        <p>
          <Button type="submit" variant="outline-dark">
            로그인
          </Button>
        </p>
        <span
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </span>
      </div>
    </div>
  );
}

export default Signin;
