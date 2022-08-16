import React from "react"

function ContactList(props) {
  return (
    <div className="flex item-center justify-left mb-5 hover:bg-slate-200 rounded-xl cursor-pointer p-2">
      <img className="w-8 h-8 rounded-full" src={props.img} alt="profile picture" />
      <span className="ml-2 mt-2">{props.name}</span>
    </div>
  )
}

export default ContactList
