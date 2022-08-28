import { Link } from "react-router-dom";

const NavigationDesktop = () => {
  return (
    <>
      <div>
        <div className="home">
          <Link to="/">Home </Link>
        </div>
      </div>
      <div>
        <div className="journey">
          <Link to="/Journey">Journey </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationDesktop;
