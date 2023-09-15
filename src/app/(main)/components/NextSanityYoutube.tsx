'use client'

export function NextSanityYoutube({ value }: any) {
    const videoID = value.videoID;
    return (
        <div>
        {videoID &&
        <div className="video-container">
            <iframe src={`https://www.youtube.com/embed/${videoID}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        }
        </div>
    )
}