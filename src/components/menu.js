import React from "react"
import Link from "gatsby-link"

const menu = () => {
  return (
    <div
      style={{
        background: "#F4F4F4",
        paddingTop: "10px",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default menu
