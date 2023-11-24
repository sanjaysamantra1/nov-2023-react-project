import React from "react";
import usersArr from "./users";

export default function ListDemo4() {
  return <>
    <div className="container">
        <div className="row">
            {
                usersArr.map((user)=>{
                    return <div className="col">
                        <div class="card text-center">
                                <img src='https://www.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg' class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{user.username}</h5>
                                    <p class="card-text">Name: {user.name}</p>
                                    <p class="card-text">Email: {user.email}</p>
                                    <p class="card-text">Phone: {user.phone}</p>
                                    <a href="#" class="btn btn-primary">View</a>
                                </div>
                            </div>
                        </div>
                })
            }
        </div>
    </div>
  </>
}
