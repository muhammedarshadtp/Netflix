

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-40 px-20 text-white  bg-gradient-to-r from-black absolute">
            <h1 className="text-6xl font-bold">
                {title}
            </h1>
            <p className="py-6 text-lg w-1/3 ">{overview}</p>
            <div>
                <button className="bg-white text-black hover:bg-opacity-80 rounded-lg font-medium text-xl  p-3 px-12">
                    ▶️ Play</button>
                <button className="m-2 bg-gray-400 hover:bg-opacity-35  text-black rounded-lg font-medium text-xl bg-opacity-30  p-3 px-12">
                    ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;