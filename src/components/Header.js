import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  return (
    <>
      <div className="info">
        <span
          className="sign-in"
          onClick={() => {
            navigate("/signin");
          }}
        >
          로그인
        </span>
        <span
          className="sign-up"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </span>
        <span
          onClick={() => {
            navigate("/cart");
          }}
          className="material-symbols-outlined"
        >
          shopping_cart
        </span>
      </div>
      <div className="logoContainer">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="logo"
          src="/img/logo.png"
          alt="logo"
        />
      </div>

      <div className="nav">
        <ul className="navbar-menu">
          <li
            onClick={() => {
              navigate("/tent");
            }}
          >
            Tent
          </li>
          <li
            onClick={() => {
              navigate("/sleepingbag");
            }}
          >
            Sleeping bag
          </li>
          <li
            onClick={() => {
              navigate("/bbq");
            }}
          >
            BBQ
          </li>
          <li
            onClick={() => {
              navigate("/chair");
            }}
          >
            Chair
          </li>
          <li
            onClick={() => {
              navigate("/table");
            }}
          >
            Table
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
