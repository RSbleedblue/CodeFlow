import LogoComponent from "../Common/CommonLogo";

const UserMenu = () => {
    return (
        <>
            <div className="w-[5%]  p-2 flex flex-col items-center rounded-2xl bg-black  border border-gray-900 shadow-xl h-screen gap-4">
                <LogoComponent/>
                <div className="flex items-center gap-1 mt-10">
                        <svg className="h-6 w-6">
                            <use xlinkHref="#custom-logo" />
                        </svg>
                    
                </div>
            </div>
        </>
    )
}
export default UserMenu;