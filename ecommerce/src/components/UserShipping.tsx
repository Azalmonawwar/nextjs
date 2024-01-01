import React from 'react'
const UserShipping = ({data}:any) => {
    // console.log(data)
  return (
    <>
        {
            data?.map((item:any) => {
                <div className="border-[1px] border-gray-300 p-5 ">
                    {item?.name}hellow
                </div>
            })
        }
    </>
  )
}

export default UserShipping