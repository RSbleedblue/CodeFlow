import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import PreLoader from '../utils/PreLoader';
import UserMenu from './UserSideBar';

const UserDashboard = () => {
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(false);
        }, 2000);
    }, []);

    return (
        <>
            {
                isLoaded ? <PreLoader /> :
                    <div className='flex gap-10'>
                        <UserMenu />
                        <div className='ml-[9%] w-full'>
                            <Outlet />
                        </div>
                    </div>
            }
        </>
    );
};

export default UserDashboard;
