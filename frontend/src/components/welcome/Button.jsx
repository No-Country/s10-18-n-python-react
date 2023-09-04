import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <div className="">
      <Link to={link}>
        <button
          className="rounded-full py-6 w-72 sm:w-96 font-latoBold hover:scale-105 transition-all"
          style={{
            background:
              "linear-gradient(120deg, rgba(166, 222, 247, 0.50) 8%, rgba(0,0,0, 0.09) 100%)",
            boxShadow:
              "0px 2.9820661544799805px 2.385653018951416px 0px rgba(58, 60, 64, 0.02), 0px 7.166319847106934px 5.733055591583252px 0px rgba(58, 60, 64, 0.03), 0px 13.49354362487793px 10.794835090637207px 0px rgba(58, 60, 64, 0.04), 0px 24.07017707824707px 19.256141662597656px 0px rgba(58, 60, 64, 0.04), 0px 45.0206184387207px 36.01649475097656px 0px rgba(58, 60, 64, 0.05), 0px 107.7625503540039px 86.21003723144531px 0px rgba(58, 60, 64, 0.07)",
          }}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
