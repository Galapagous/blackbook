import React from "react"

function LeftItem(props) {
  return (
    <div className="flex item-center justify-left mb-2 hover:bg-slate-300 rounded-xl cursor-pointer p-2">
      <img src={props.img} style={{ width: "30px", height: "30px", borderRadius: "50%", color: "blue", marginLeft: "6px", objectFit: "cover" }} />
      <span className="ml-2">{props.name}</span>
    </div>
  )
}

export default LeftItem
