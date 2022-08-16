import React from "react"

function SingleItem() {
  return (
    <div className="flex items-center justify-center">
      <AddAPhoto className="cursor-pointer" />
      <h2 className="ml-2 font-semibold">Photo/video</h2>
    </div>
  )
}

export default SingleItem
