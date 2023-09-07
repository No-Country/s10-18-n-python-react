import React from "react"
import { Link } from "react-router-dom"

const Button = ({ text, link }) => {
  return (
    <div className="">
      <Link to={link}>
        <button
          className="rounded-full py-5 w-72 sm:w-96 font-latoBold text-black bg-gradient-custom box-shadow-custom hover:scale-105 transition-all">
          {text}
        </button>
      </Link>
    </div>
  )
}

export default Button
