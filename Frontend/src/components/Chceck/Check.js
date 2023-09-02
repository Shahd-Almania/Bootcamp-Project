import React from "react";
import Email from "../../assets/img/icons8-email-64.png";
import Card from "../Card/Card";
import URL from "../../assets/img/icons8-url-website-55.png";
import Phone from "../../assets/img/icons8-ringer-volume-48.png";
import { useNavigate } from "react-router-dom";
import "./Check.css";

export const Check = () => {
  const navigate = useNavigate();
  return (
    <div
      id="Check"
      className="d-flex flex-column align-items-center px-5 mt-5 "
    >
      <div className="Check d-flex align-items-center">
        <Card
          title="Email"
          desc="Click here to check if the sender of email is spam before replying to it."
          image={Email}
          btn="Email Check"
          onClick={() => navigate("/EmailCheck")}
        />
        <Card
          title="URL"
          desc="Click here to check if the URL is fraud before you click on it ."
          image={URL}
          btn="URL Check"
          onClick={() => navigate("/Urlcheck")}
        />
        <Card
          title="PhoneNumber"
          desc="Click here to check if the PhoneNumber is fraud before answearing it. "
          image={Phone}
          btn="PhoneNumber Check "
          onClick={() => navigate("/phonecheck")}
        />
      </div>
    </div>
  );
};
export default Check;
