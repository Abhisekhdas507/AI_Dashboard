import React from 'react'

const AvatarCard = ({avatar}) => {

  const id = avatar.id;
  let gender = null;

  if(avatar.gender === "female")
    gender = "women";
  else
  gender = "men";


  const avatarImg = `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;

  return (
    <div className="bg-purple-700 hover:bg-purple-600 p-4 shadow-lg rounded-lg flex flex-col items-center min-w-[300px] duration-300 hover:scale-105 hover:shadow-[0px_0px_10px_rgba(34,197,94,0.6)] cursor-pointer">
      <img src={avatarImg} alt={avatar.firstName} className="w-24 h-24 rounded-full mb-2"/>
      <h2 className="text-lg font-semibold font-[Poppins] text-gray-400">{avatar.firstName} {avatar.lastName}</h2>
      <button className="mt-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded font-[Poppins]">Edit</button>
    </div>
  )
}

export default AvatarCard