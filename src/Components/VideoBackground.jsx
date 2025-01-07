import useMovieTrailer from "../Hooks/useMovieTrailer"

// fetch trailer video && updating  


const VideoBackGround = ({ movieId }) => {
    const { trailerId } = useMovieTrailer(movieId)

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + trailerId?.key} title="YouTube video player" allow="accelerometer;
               autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture;
                 web-share" referrerPolicy="no-referrer">
            </iframe>
        </div>
    )
}

export default VideoBackGround;