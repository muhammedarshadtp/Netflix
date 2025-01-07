

const VideoTitle = ({title,overview}) =>{
    return (
        <div className="pt-36 px-20">
            <h1 className="text-6xl font-bold">
                {title}
            </h1>
            <p className="py-6 text-lg w-1/4 ">{overview}</p>
            <div>
                <button className="bg-black text-white rounded-lg text-xl  p-3 px-12">
                    ▶️ Play</button>
                <button className="m-2 bg-gray-400 text-black rounded-lg text-xl bg-opacity-30  p-3 px-12">
                   ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;