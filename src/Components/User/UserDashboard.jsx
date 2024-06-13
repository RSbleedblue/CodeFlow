import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import PreLoader from '../utils/PreLoader';
import UserMenu from './UserSideBar';
import { useDispatch } from 'react-redux';
import { loginSelected } from '../Redux/Slices/LoginSlice';

const UserDashboard = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loginSelected());
    },[]);

    return (
        <>
            {isLoaded ? (
                <div className='flex gap-10'>
                    <UserMenu />
                    <div className='ml-[9%] w-full'>
                        <Outlet />
                    </div>
                </div>
            ) : (
                <PreLoader />
            )}
        </>
    );
};

export default UserDashboard;
