import React from "react";
import usersArr from "./users";
import UserCard from "./UserCard";

export default function UserList() {
  return <>
    <div className="container">
        <div className="row">
            {
                usersArr.map((userOb,ind)=>{
                    return <div className="col-sm-3" key={ind}>
                                <UserCard user={userOb} />
                           </div>
                })
            }
        </div>
    </div>
  </>
}
