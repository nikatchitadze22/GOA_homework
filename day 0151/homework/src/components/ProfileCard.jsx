import { useState } from "react";
import Name from "./Name";
import Description from "./Description";
import Avatar from "./Avatar";

const ProfileCard = ({ fullName, text, src}) => {
    const [following, setFollowing] = useState(false);

    return (

    <div>
        <Avatar src={src} />
        <Name fullname={fullName}/>
        <Description text={text} />
        <button onClick={() => setFollowing(!following)} className={`px-4 py-2 rounded-full text-white transition ${following ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`}>{following ? "Following" : "Follow"}</button>
    </div>
    )
}


export default ProfileCard;