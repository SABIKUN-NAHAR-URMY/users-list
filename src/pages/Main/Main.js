import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center underline decoration-dashed mt-7'>Users Information</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;