import React from "react"
import HomePage from "../components/HomePage"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <HomePage />
    </div>
  )
}

export default Home
