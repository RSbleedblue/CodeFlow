import LogoComponent from "./CommonLogo";

const Menu = () => {
    return (
        <>
            <div className="w-[18%]  p-2 flex flex-col items-center rounded-2xl bg-black  border border-gray-900 shadow-xl h-screen gap-4">
                <LogoComponent/>
                <div className="flex items-center gap-1 mt-10">
                    <p className="text-white flex items-center text-xl gap-1">C <span>
                        <svg className="h-6 w-6">
                            <use xlinkHref="#custom-logo" />
                        </svg>
                    </span></p>
                    <p className="text-white text-xl">DEFLOW</p>
                </div>
                <p className="text-gray-400 text-[12px] font-mono">Try our Online Editor</p>
                <button class="rounded-md bg-gradient-to-r from-red-600 via-red-500 to-yellow-600 p-1 hover:from-yellow-600 hover:via-red-500 hover:to-red-600 transition-all">
                    <div class=" bg-gray-800 hover:bg-gray-900 transition-all cursor-pointer">
                        <h1 class="text-sm font-mono text-white p-4">Start Coding</h1>
                    </div>
                </button>
                
                
            </div>
        </>
    )
}

export default Menu;
