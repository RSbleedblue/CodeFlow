import { useEffect, useState } from "react";
import PreLoader from "./utils/PreLoader";
import UserLogin from "./User/UserLogin";
import Menu from "./Common/CommonMenu";
import Search from "./Common/CommonSearch";
import Landing from "./Common/CommonLanding";
import { useSelector } from "react-redux";

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
    }, []);
    const openLoginPage = useSelector((state)=>state.auth.loginSelected);
    return (
        <>
            {
                isLoaded ? (
                    <div className="flex gap-2 w-full">
                        <Menu />
                        <div className="flex flex-col gap-2 w-full">
                        <Search/>
                        {
                            openLoginPage ? (<UserLogin/>): (
                                <Landing/>)
                        }
                        </div>
                    </div>
                ) : <PreLoader />
            }
        </>
    )
}
export default Home;