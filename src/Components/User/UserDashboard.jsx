import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Menu from '../Common/CommonMenu';
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
                    <div className='w-full flex gap-4'>
                        <UserMenu />
                        <Outlet />
                    </div>
            }
        </>
    );
};

export default UserDashboard;
