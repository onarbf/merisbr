'use client'

export function NextSanityVimeo({ value }: any) {
    const videoID = value.videoID;
    return (
        <div>
        {videoID &&
        <div>
            <iframe src={`https://player.vimeo.com/video/${videoID}`} width="640" height="365" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
        }
        </div>
    )
}