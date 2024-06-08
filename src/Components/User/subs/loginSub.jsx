const LoginSub = ({type}) => {
    return (
        <>
            <div className={`w-[80%]  p-4 flex gap-6 rounded-lg items-center text-white bg-gray-900 mb-2 hover:bg-white hover:text-gray-800 transition-all cursor-pointer`}>
                {type.logo}
                <p>{type.text}</p>
            </div>
        </>
    )
}
export default LoginSub;