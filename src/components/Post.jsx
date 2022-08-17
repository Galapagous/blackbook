import React from "react"
import { AddAPhoto, ChatBubble, Favorite, LiveTv, Mood, MoreHoriz, Public, Recommend, Replay, Reply, Search, ThumbUpAlt, VideoCall, WorkOutlined } from "@mui/icons-material"
import Guy from "../Assets/Images/guy.jpg"
import Profile from "../Assets/Images/girl.jpg"

function Post(props) {
  return (
    <div className="my-5 bg-slate-50 rounded-lg py-5">
      <div className="">
        <div className="my-3 flex items-center justify-between w-full px-5">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src={Guy} alt="friend request" />
            <div className="items-center justify-between ml-5">
              <h1 className="font-semibold">{props.name}</h1>
              <div className="flex">
                <h1 className="text-sm font-semibold text-gray-600 mr-5">Aug 11 at 10:21am</h1>
                <Public style={{ width: "15px", height: "15px" }} className="cursor-pointer mt-1" />
              </div>
            </div>
          </div>
          <MoreHoriz className="cursor-pointer" />
        </div>
        <div className="border-y-2 border-slate-600 mb-2"></div>
      </div>
      {/* ------------------------------------------------text area------------------------------------------------ */}
      <p className="px-5">{props.post}</p>
      <div className="w-full h-96 overflow-hidden mt-5">
        <img className="w-full h-full object-cover" src={props.img} alt="post image" />
      </div>
      {/* ----------------------------------------------------like section-------------------------------------------------- */}
      <div className="flex item-center justify-between mt-3 px-3 w-full">
        <div className="flex">
          <Recommend className="mr-2 cursor-pointer" />
          <Favorite className="mr-2 cursor-pointer" />
          <h1>Rufai Muhammed and 109 others</h1>
        </div>
        <h1 className="cursor-pointer text-bold">109 comments</h1>
      </div>
      {/* ----------------------------------------------------Edit section-------------------------------------------------- */}
      <div className="flex items-center justify-between px-10 mt-5 py-5 border-y-2 border-y-slate-500">
        <div className="flex flex-row-reverse item-center justify-center">
          <h1 className="text-lg font-semibold text-gray-600 mr-5">Like</h1>
          <ThumbUpAlt style={{ width: "20px", height: "20px" }} className="cursor-pointer mt-1 mr-2" />
        </div>
        <div className="flex flex-row-reverse item-center justify-center">
          <h1 className="text-slg font-semibold text-gray-600 mr-5">comment</h1>
          <ChatBubble style={{ width: "20px", height: "20px" }} className="cursor-pointer mt-1 mr-2" />
        </div>
        <div className="flex flex-row-reverse item-center justify-center">
          <h1 className="text-lg font-semibold text-gray-600 mr-5">Share</h1>
          <Reply style={{ width: "20px", height: "20px" }} className="cursor-pointer mt-1 mr-2" />
        </div>
      </div>
      {/* ----------------------------------------------------comment section-------------------------------------------------- */}

      <div className="flex items-center justify-between ml-5 mt-2 w-44">
        <img className="w-10 h-10 rounded-full mr-5" src={Profile} alt="photo" />
        <div className="flex flex-col item-center justify-center">
          <h1 className="font-semibold text-sm">Hassan jiya</h1>
          <h1 className="text-sm">keep it up bro</h1>
          <div className="flex text-sm">
            <span className="font-bold mr-5 cursor-pointer">Like</span>
            <span className="font-bold mr-5 cursor-pointer">Reply</span>
            <span className="">2h</span>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------write comment section-------------------------------------------------- */}
      <div className="w-1/4 flex items-center justify-center ml-5 mt-5">
        <img className="w-1/4 mr-4 h-10 object-cover rounded-full cursor-pointer" src={Profile} alt="facebook logo" />
        <div className="w-full rounded-2xl items-center h-5">
          <input className="w-3/4 p-3 h-8 bg-transparent ml-2 rounded-lg" type="text" placeholder="write a comment" />
        </div>
      </div>
    </div>
  )
}

export default Post
