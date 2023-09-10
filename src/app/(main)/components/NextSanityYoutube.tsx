'use client'

export function NextSanityYoutube({ value }: any) {
    const videoID = value.videoID;
    console.log('youtube videoID',videoID)
    return (
        <div>
        {videoID &&
        <div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoID}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        }
        </div>
    )
}