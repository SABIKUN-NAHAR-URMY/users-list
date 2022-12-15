import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsersListShow from '../UsersListShow/UsersListShow';

const UsersList = () => {
    const[users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('users.json')
        .then(data => setUsers(data.data))
    },[])
    return (
        <div className='my-20 grid grid-cols-1 lg:grid-cols-2 lg:mx-64'>
            <div className="card w-96 bg-base-100 shadow-xl mb-8">
                <div className="card-body">
                    <h2 className="text-xl font-bold border rounded-lg bg-sky-200 p-2">USERS LIST</h2>
                    <div className='mt-4'>
                        {
                            users.map(user => <UsersListShow
                            key={user.id}
                            user={user}
                            ></UsersListShow>)
                        }
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            <h2 className="text-xl font-bold border rounded-lg bg-sky-200 p-2">USERS DETAILS</h2>
            </div>
        </div>
        </div>
    );
};

export default UsersList;