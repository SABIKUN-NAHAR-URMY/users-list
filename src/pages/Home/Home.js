import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../Loading/Loading';
import UsersListShow from '../UsersListShow/UsersListShow';
import dummy from '../../images/dummy.png';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(data => {
                setLoading(false);
                setUsers(data.data);
            })
    }, [])

    const idData = useLoaderData();
    console.log(idData);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-20 grid grid-cols-1 lg:grid-cols-2 lg:mx-64'>
            <div className="card w-96 bg-base-100 shadow-xl mb-8 text-center px-7">
                <div className="my-10">
                    <h2 className="text-xl font-bold border rounded-lg bg-sky-200 p-2">USERS LIST</h2>
                    <div className='mt-4'>
                        {
                            users.map(user => <UsersListShow
                                key={user._id}
                                user={user}
                            ></UsersListShow>)
                        }
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl px-7">
                <h2 className="mt-10 text-center text-xl font-bold border rounded-lg bg-sky-200 p-2 mb-8">USERS DETAILS</h2>
                {
                    idData ?
                        <div className='mb-10'>
                            <div className="avatar px-24">
                                <div className="w-24 rounded-full ring ring-slate-300 ring-offset-base-100 ring-offset-2">
                                    <img src={dummy} alt="" />
                                </div>
                            </div>
                            <p className='px-20 mb-8'>@{idData.profile.username}</p>
                            <h1 className='border rounded-lg bg-slate-300 p-2 mb-4'>{idData.Bio}</h1>
                            <h2>Full Name</h2>
                            <h1 className='mb-4 border rounded-lg bg-slate-300 p-2'>{idData.profile.firstName + ' ' + idData.profile.lastName}</h1>

                            <h2>Job Title</h2>
                            <h1 className='mb-4 border rounded-lg bg-slate-300 p-2'>{idData.jobTitle}</h1>
                            <h2>Email</h2>
                            <h1 className='border rounded-lg bg-slate-300 p-2'>{idData.profile.email}</h1>

                        </div>
                        :
                        <p className='text-xl font-thin text-center mt-8'>Please click on Users List to show User Details.</p>
                }

            </div>
        </div>
    );
};

export default Home;