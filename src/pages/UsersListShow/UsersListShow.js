import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const UsersListShow = ({ user }) => {
    console.log(user);
    const { avatar, profile } = user;
    return (

        <button
            className=" w-80 mb-4 focus:bg-slate-400 focus:text-white border rounded-lg bg-slate-300 p-2 flex justify-center items-center gap-4">
            <div className="avatar">
                <div className="w-10 rounded-full ring ring-slate-400 ring-offset-base-100 ring-offset-2">
                    {
                        avatar ?
                            <img src={avatar ? avatar : <FaUserCircle></FaUserCircle>} alt='' />
                            :
                            <FaUserCircle></FaUserCircle>
                        }
                </div>
            </div>
            {profile.firstName + ' ' + profile.lastName}
        </button>

    );
};

export default UsersListShow;