import React from "react"
import Profile from "../Assets/Images/girl.jpg"
import ListItem from "./LeftItem"
import { AddAPhoto, ChatBubble, Favorite, LiveTv, Mood, MoreHoriz, Public, Recommend, Replay, Reply, Search, ThumbUpAlt, VideoCall, WorkOutlined } from "@mui/icons-material"

function Rightbar() {
  return (
    <div className="w-1/4 px-5 overflow-y-auto -scroll-m-2 h-screen">
      <h1 className="text-xl font-semi-bold mb-10">Sponsored</h1>
      <div className="border-t-2 border-b-2 border-slate-500 py-3">
        <div className="flex items-center justify-between">
          <span>Friends request</span>
          <span className="cursor-pointer">See all</span>
        </div>
        <div className="my-3 flex items-center justify-between w-full">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src={Profile} alt="friend request" />
            <div className="items-center justify-between ml-5">
              <h1 className="font-semibold">Hassan Jiya</h1>
              <div className="flex">
                <img className="w-5 h-5 rounded-full" src={Profile} alt="photo" />
                <h1 className="ml-2 text-sm">1 mutual friend</h1>
              </div>
            </div>
          </div>
          <h3 className="font-semibold">3d</h3>
        </div>
        {/* -----------------------------------------------Button Area----------------------------------------------------- */}
        <div className="flex items-center justify-center">
          <button className="bg-slate-400 w-24 rounded-lg cursor-pointer p-2 m-2 text-slate-100 font-semibold">Confirm</button>
          <button className="bg-gray-600 w-24 rounded-lg cursor-pointer p-2 m-2 text-slate-100 font-semibold">Delete</button>
        </div>
      </div>
      <div className="mx-2 border-b-2 border-b-slate-500">
        <span className="font-semibold">Birthdays</span>
        <ListItem img={Profile} name="David Pavel and 3 others have birthday today" />
      </div>
      <div>
        <div className="flex items-center justify-between ml-2 mt-2">
          <span>Contact</span>
          <div className="flex item-center justify-center">
            <VideoCall className="mr-1 cursor-pointer" />
            <Search className="mr-1 cursor-pointer" />
            <MoreHoriz className="mr-1 cursor-pointer" />
          </div>
        </div>
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
        <ListItem img={Profile} name="Muhammed Musa" />
      </div>
    </div>
  )
}

export default Rightbar
