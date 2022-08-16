import React from "react"
import { Search, Home, Storefront, Group, SportsEsports, Menu, Quickreply, Notifications } from "@mui/icons-material"
import Logo from "../Assets/Images/penguinRm.png"
import Girl from "../Assets/Images/girl.jpg"

function Navbar() {
  return (
    <div className="w-full flex sm:flex-row flex-col h-20 bg-slate-50 fixed top-0 items-center justify-center border-b-2 border-b-black-500">
      {/* ---------------------------------top bar left -------------------------------------------- */}
      <div className="w-1/4 flex">
        <img className="w-20 h-20 object-cover cursor-pointer" src={Logo} alt="facebook logo" />
        <div className="w-40 bg-slate-200 rounded-2xl flex items-center h-8 mt-6">
          <Search className="w-5 ml-2 h-5" />
          <input className="w-24 bg-transparent ml-2 rounded-lg" type="text" placeholder="search" />
        </div>
      </div>
      {/* ---------------------------------top bar center -------------------------------------------- */}
      <div className="w-1/2 flex item-center justify-between m-5">
        <div className="w-3/4 flex items-center justify-between">
          <Home style={{ padding: "5x", width: "40px", height: "40px" }} className="cursor-pointer hover:border-b-2 hover:border-b-slate-500" />
          <Storefront style={{ padding: "5x", width: "40px", height: "40px" }} className="cursor-pointer hover:border-b-2 hover:border-b-slate-500" />
          <Group style={{ padding: "5x", width: "40px", height: "40px" }} className="cursor-pointer hover:border-b-2 hover:border-b-slate-500" />
          <SportsEsports style={{ padding: "5x", width: "40px", height: "40px" }} className="cursor-pointer hover:border-b-2 hover:border-b-slate-500" />
        </div>
      </div>
      {/* ---------------------------------top bar right -------------------------------------------- */}
      <div className="w-1/6 flex item-center justify-between m-5">
        <Menu style={{ padding: "5x", width: "30px", height: "30px" }} className="cursor-pointer hover:border-b-2 hover:border-b-slate-500" />
        <Quickreply style={{ padding: "5x", width: "30px", height: "30px" }} className="cursor-pointer hover:border-b-2 hover:border-b-slate-500" />
        <Notifications style={{ padding: "5x", width: "30px", height: "30px" }} className="cursor-pointer hover:border-b-2 hover:border-b-slate-500" />
        <img className="w-8 h-8 object-cover rounded-full cursor-pointer" src={Girl} alt="profile pix" />
      </div>
    </div>
  )
}

export default Navbar
