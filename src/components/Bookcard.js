import React from 'react'

const Bookcard = ({image, title}) => {

    const showit = () => {
        alert("Download Book")
    }
    return (
        <div className="md:w-1/5 shadow md:mx-6 my-4">
          <img
            style={{ width: "260px" }}
            src={image}
            alt="soul is a river"
          />
          <div className="text-gray-900 text-center text-lg bg-gray-200 p-1">{title}</div>
          <div className="text-gray-900 text-center text-lg bg-gray-100 p-1" onClick={showit}>Download</div>
        </div>
    )
}

export default Bookcard
