import React, { useEffect, useState } from 'react'
import AvatarCard from './AvatarCard';

const Avatar = () => {

    const [avatars, setAvatars] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchAvatarData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://dummyjson.com/users?limit=3');
                const data = await response.json();
                setAvatars(data.users);
                console.log(data.users);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAvatarData();
    }, [])


    return (
        <div className="px-4 max-w-[1200px] mx-auto pt-[50px] sm:pt-[100px] pb-8">
            {
                loading ? (
                    <div className="text-center text-lg font-semibold">Loading...</div>
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {
                            avatars.map((avatar) => (<AvatarCard  key={avatar.id} avatar={avatar} />))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Avatar