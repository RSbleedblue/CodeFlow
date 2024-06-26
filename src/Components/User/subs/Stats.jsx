const StatsSub = (props) => {
    return (
        <>
            <div className="flex w-[15%] p-3 bg-codePlace rounded-lg flex-col items-end border border-solid border-gray-400 border-opacity-10">
                <div className="flex w-full  gap-2 items-center">
                    {/* {props.icon && <props.icon className="text-3xl" />} */}
                    {props.icon}
                    <p className="text-l text-gray-200">{props.title}</p>
                </div>
                {
                    props.title === "Date" ? 
                    <p className="text-xl text-codeFlow mt-3">{props.value}</p> : <p className="text-[30px] text-codeFlow">{props.value}</p>
                }
            </div>
        </>
    )
}
export default StatsSub;
