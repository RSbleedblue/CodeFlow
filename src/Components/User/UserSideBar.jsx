import LogoComponent from "../Common/CommonLogo";
import { IoCode } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserMenu = () => {
    return (
        <>
            <div className="w-[8%] p-2 flex flex-col items-center rounded-2xl bg-black justify-between border border-gray-900 shadow-xl h-screen gap-4">
                <LogoComponent />
                <div className="flex items-center gap-1 mt-10">
                    <svg className="h-10 w-10">
                        <use xlinkHref="#custom-logo" />
                    </svg>
                </div>
                <div className="flex flex-col gap-4">
                    <FaHome className="text-gray-600 text-2xl hover:text-codeFlow" />
                    <Link to="/user/coding" className="text-gray-600 text-2xl hover:text-codeFlow">
                        <IoCode />
                    </Link>
                    <GrProjects className="text-gray-600 text-2xl hover:text-codeFlow" />
                </div>
                <div>
                    <RiLogoutCircleLine className="text-gray-600 text-2xl hover:text-codeFlow" />
                </div>
            </div>
        </>
    )
}

export default UserMenu;
