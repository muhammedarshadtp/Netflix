

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-10 md:pt-40 px-7 md:px-20 text-white  bg-gradient-to-r from-black absolute">
            <h1 className="text-xl md:text-6xl font-bold">
                {title}
            </h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/3 ">{overview}</p>
            <div className="my-2 md:my-0">
                <button className=" bg-white text-black hover:bg-opacity-80 rounded-lg font-medium text-lg md:text-xl p-2 md:p-3 px-5 md:px-12">
                    ▶️ Play</button>
                <button className="hidden md:inline-block m-2 bg-gray-400 hover:bg-opacity-35  text-black rounded-lg font-medium text-xl bg-opacity-30  p-3 px-12">
                    ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;