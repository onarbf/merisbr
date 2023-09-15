'use client'

export function NextSanityVimeo({ value }: any) {
    const videoID = value.videoID;
    return (
        <div>
        {videoID &&
        <div className="video-container">
            <iframe src={`https://player.vimeo.com/video/${videoID}`} allowFullScreen ></iframe>
        </div>
        }
        </div>
    )
}