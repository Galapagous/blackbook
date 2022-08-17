import React from "react"
import Leftbar from "./Leftbar"
import Main from "./Main"
import Rightbar from "./Rightbar"

function HomePage() {
  return (
    <div className="w-full h-full mt-20 pt-2 flex bg-slate-200">
      {/* --------------------------------------------Left Hand side ------------------------------------------------- */}
      <Leftbar />
      {/* --------------------------------------------Center side ------------------------------------------------- */}
      <Main />
      {/* --------------------------------------------Right Hand side ------------------------------------------------- */}
      <Rightbar />
    </div>
  )
}

export default HomePage
