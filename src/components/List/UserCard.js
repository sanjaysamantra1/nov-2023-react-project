import React from 'react'

export default function UserCard(props) {
    const {username,name,email,phone} = props.user; // Props de-structuring

        return <div class="card text-center">
            <img src='https://www.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg' class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{username}</h5>
                <p class="card-text">Name: {name}</p>
                <p class="card-text">Email: {email}</p>
                <p class="card-text">Phone: {phone}</p>
                <a href="#" class="btn btn-primary">View</a>
            </div>
        </div>
}
