import React from "react"
import { AddAPhoto, ChatBubble, Favorite, LiveTv, Mood, MoreHoriz, Public, Recommend, Replay, Reply, Search, ThumbUpAlt, VideoCall, WorkOutlined } from "@mui/icons-material"
import Profile from "../Assets/Images/girl.jpg"
import Post from "./Post"
import Collins from "../Assets/Images/collins.jpg"
import Camera from "../Assets/Images/camera.jpg"
import Soft from "../Assets/Images/soft.jpg"

function Main() {
  return (
    <div className="w-1/2 mx-2 static h-screen overflow-y-auto scroll-m-3 px-3">
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
      <Post name="Abdul Waqas" img={Soft} post="Do hard things. Most of us that are previlege to be alive, to have education and to have inflence, our role is not to solve small problems, our role is to solve our nations biggest problem. In my own country its CURRUPTION. Every now and then, a generation is called upon to be great, You can be that generation. Remember of all the hard things we need to do, the most important thing is to keep going." />
      <Post name="Olu David" img={Camera} post="Do hard things. Most of us that are previlege to be alive, to have education and to have inflence, our role is not to solve small problems, our role is to solve our nations biggest problem. In my own country its CURRUPTION. Every now and then, a generation is called upon to be great, You can be that generation. Remember of all the hard things we need to do, the most important thing is to keep going." />
      <Post name="Olu David" img={Camera} post="Do hard things. Most of us that are previlege to be alive, to have education and to have inflence, our role is not to solve small problems, our role is to solve our nations biggest problem. In my own country its CURRUPTION. Every now and then, a generation is called upon to be great, You can be that generation. Remember of all the hard things we need to do, the most important thing is to keep going." />
      <Post name="Olu David" img={Camera} post="Do hard things. Most of us that are previlege to be alive, to have education and to have inflence, our role is not to solve small problems, our role is to solve our nations biggest problem. In my own country its CURRUPTION. Every now and then, a generation is called upon to be great, You can be that generation. Remember of all the hard things we need to do, the most important thing is to keep going." />
    </div>
  )
}

export default Main
