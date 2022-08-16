import React from "react"
import Profile from "../Assets/Images/girl.jpg"
import Camera from "../Assets/Images/camera.jpg"
import ContactList from "./ContactList"
import ListItem from "./LeftItem"
import Friends from "../Assets/Icons/friends.png"
import Group from "../Assets/Icons/group.png"
import Shop from "../Assets/Icons/shop.png"
import Tv from "../Assets/Icons/tv.png"
import Memories from "../Assets/Icons/memories.png"
import Bookmark from "../Assets/Icons/bookmark.png"
import Flag from "../Assets/Icons/flag.png"
import Event from "../Assets/Icons/event.png"
import Recent from "../Assets/Icons/most.png"
import Star from "../Assets/Icons/star.png"

import { AddAPhoto, ChatBubble, Favorite, LiveTv, Mood, MoreHoriz, Public, Recommend, Replay, Reply, Search, ThumbUpAlt, VideoCall, WorkOutlined } from "@mui/icons-material"

function HomePage() {
  return (
    <div className="w-full h-full mt-20 pt-2 flex bg-slate-200">
      {/* --------------------------------------------Left Hand side ------------------------------------------------- */}
      <div className="w-1/4 left-0">
        <ContactList name="Muhammed Musa" img={Profile} />
        <ListItem img={Friends} name="Friends" />
        <ListItem img={Group} name="Group" />
        <ListItem img={Shop} name="Market" />
        <ListItem img={Tv} name="Watch" />
        <ListItem img={Memories} name="Memories" />
        <ListItem img={Bookmark} name="Pages" />
        <ListItem img={Flag} name="Flag" />
        <ListItem img={Event} name="Event" />
        <ListItem img={Recent} name="Recent" />
        <ListItem img={Star} name="Favorite" />
        <div className="flex mb-2 hover:bg-slate-300 rounded-xl p-2 cursor-pointer">
          <span></span>
          <span>See more</span>
        </div>
      </div>
      {/* --------------------------------------------Center side ------------------------------------------------- */}
      <div className="w-1/2 mx-10">
        <div className="bg-white rounded-t-lg mb-5">
          <div className="flex items-center justify-center w-full h-20 rounded-t-lg border-b-2 border-b-slate-400">
            <img className="w-10 h-10 rounded-full cursor-pointer" src={Profile} alt="profile pix" />
            <input placeholder="what's on your mind" className="w-3/4 ml-10 pl-5 h-10 rounded-2xl bg-slate-200" />
          </div>
          <div className="flex h-20 items-center justify-between mx-10">
            <div className="flex items-center justify-center">
              <LiveTv className="cursor-pointer" />
              <h2 className="ml-2 font-semibold">LiveTv</h2>
            </div>
            <div className="flex items-center justify-center">
              <AddAPhoto className="cursor-pointer" />
              <h2 className="ml-2 font-semibold">Photo/video</h2>
            </div>
            <div className="flex items-center justify-center">
              <Mood className="cursor-pointer" />
              <h2 className="ml-2 font-semibold">Feeling/Activity</h2>
            </div>
          </div>
        </div>
        <div className="my-5 bg-slate-50 rounded-lg py-5">
          <div className="">
            <div className="my-3 flex items-center justify-between w-full px-5">
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full" src={Profile} alt="friend request" />
                <div className="items-center justify-between ml-5">
                  <h1 className="font-semibold">Mr Nelson Mandela</h1>
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
          <p className="px-5">Do hard things. Most of us that are previlege to be alive, to have education and to have inflence, our role is not to solve small problems, our role is to solve our nations biggest problem. In my own country its CURRUPTION. Every now and then, a generation is called upon to be great, You can be that generation. Remember of all the hard things we need to do, the most important thing is to keep going.</p>
          <div className="w-full h-96 overflow-hidden mt-5">
            <img className="w-full h-full object-cover" src={Camera} alt="post image" />
          </div>
          {/* ----------------------------------------------------like section-------------------------------------------------- */}
          <div className="flex item-center justify-between mt-3">
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
            <img className="w-10 mr-4 h-10 object-cover rounded-full cursor-pointer" src={Profile} alt="facebook logo" />
            <div className="w-full rounded-2xl items-center h-5">
              <input className="w-full p-3 h-8 bg-transparent ml-2 rounded-lg" type="text" placeholder="write a comment" />
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------Right Hand side ------------------------------------------------- */}
      <div className="w-1/4 px-5">
        <h1 className="text-xl font-semi-bold mb-10">Sponsored</h1>
        <div className="border-t-2 border-b-2 border-slate-500">
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
          <div className="flex items-center justify-between ml-2">
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
    </div>
  )
}

export default HomePage
