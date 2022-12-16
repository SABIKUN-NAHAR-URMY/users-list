import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import dummy from '../../images/dummy.png';

const UsersListShow = ({ user }) => {
    const { _id, avatar, profile } = user;
    return (

        <Link to={`/users/${_id}`}
            className=" w-80 mb-4 focus:bg-slate-400 focus:text-white border rounded-lg bg-slate-300 p-2 flex  gap-4 mx-auto px-10">
            <div className="avatar">
                <div className="w-10 rounded-full ring ring-slate-400 ring-offset-base-100 ring-offset-2">
                    {
                        avatar ?
                            <img src={dummy} alt='' />
                            :
                            <FaUserCircle></FaUserCircle>
                    }
                </div>
            </div>
            <div className='mt-2'>
            {profile.firstName + ' ' + profile.lastName}
            </div>
        </Link>

    );
};

export default UsersListShow;