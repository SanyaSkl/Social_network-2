import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tSL2xn7NKb9XpMXAQ60A8rYo8DvBQPCk3A&usqp=CAU',
                    followed: false,
                    fullName: 'Sasha',
                    status: 'I am a boss',
                    location: {city: 'Stary Oskol', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'http://i24.com.ua/data/files/2014/10/27/17a2bd7fe89a4da0cf6593e14887c0b0.jpg',
                    followed: false,
                    fullName: 'Olya',
                    status: 'Boss wife',
                    location: {city: 'Stary Oskol', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://sun9-52.userapi.com/impg/r6lR2Z_J38my8uS0PROHNRjN-rBGpBZr93sTxw/z9R8T7R0saM.jpg?size=550x604&quality=96&sign=146f88fe728393153b668dc1b22a5a84&type=album',
                    followed: true,
                    fullName: 'Roma',
                    status: 'The guru and the boss\'s right hand ',
                    location: {city: 'Moscow', country: 'Russia'}
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                </div>
            </span>
                <span>
                    <span>
                       <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;