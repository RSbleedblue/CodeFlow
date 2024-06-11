const StatsSub = (props) => {
    return (
        <>
            <div className="flex w-[15%] p-3 bg-codePlace rounded-lg flex-col items-end">
                <div className="flex w-full  gap-2 items-center">
                    {/* {props.icon && <props.icon className="text-3xl" />} */}
                    {props.icon}
                    <p className="text-l text-gray-200">{props.title}</p>
                </div>
                <p className="text-[30px] text-codeFlow">{props.value}</p>
            </div>
        </>
    )
}
export default StatsSub;
