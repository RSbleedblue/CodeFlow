import { useEffect, useState } from "react";
import PreLoader from "./utils/PreLoader";
import Menu from "./Common/CommonMenu";
import Search from "./Common/CommonSearch";
import { Outlet } from "react-router-dom";

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
    }, []);
    useEffect(()=>{
        sessionStorage.setItem("isLoggedIn",false);
    },[]);

    return (
        <>
            {
                isLoaded ? (
                    <div className="flex gap-4 w-full h-screen">
                        <Menu />
                        <div className="flex flex-col gap-2 w-full ml-[210px] items-center justify-center">
                            <Search />
                            <Outlet />
                        </div>
                    </div>
                ) : <PreLoader />
            }
        </>
    );
}

export default Home;
