import React from "react"
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
import ContactList from "./ContactList"
import ListItem from "./LeftItem"
import Profile from "../Assets/Images/girl.jpg"

function Leftbar() {
  return (
    <div className="w-1/4 static left-0 h-screen overflow-y-auto">
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
  )
}

export default Leftbar
