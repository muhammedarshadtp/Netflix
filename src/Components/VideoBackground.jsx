import useMovieTrailer from "../Hooks/useMovieTrailer"

// fetch trailer video && updating  


const VideoBackGround = ({ movieId }) => {
    const { trailerId } = useMovieTrailer(movieId)

    return (
        <div>
            <iframe className="w-screen aspect-video object-cover"
                src={"https://www.youtube.com/embed/" + trailerId?.key + "?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer;
               autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture;
                 web-share" referrerPolicy="no-referrer">
            </iframe>
        </div>
    )
}

export default VideoBackGround;