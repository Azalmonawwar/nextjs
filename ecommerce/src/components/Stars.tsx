'use client'
import React from 'react'
import ReactStars from "react-rating-stars-component";
const Stars = ({rating}:any) => {
    //if rating is not a float number, then add .0 to it
    
    
  return (
    <ReactStars
                count={5}
                isHalf={true}
                value={rating}
                size={20}
                activeColor={"#075d02"}
                edit={false}
                hover={false}

                />
  )
}

export default Stars