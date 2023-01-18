import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const params = useParams()
    
    //console.log(params); // {userId: '1}
    const userId = params.userId
    //console.log(userId); // 1
    
  return <div>Details about the user {userId}.</div>;
};

export default UserDetails;
