import { NextSanityImage } from "@/app/(main)/components/NextSanityImage";
import { NextSanityVimeo } from "@/app/(main)/components/NextSanityVimeo";
import { NextSanityYoutube } from "@/app/(main)/components/NextSanityYoutube";

const PortableTextConfiguration = {
    types: {
      image: ({ value }: any) => {
        return (
          <NextSanityImage {...value} />
        );
      },
      vimeo: ({ value }: any) => {
        console.log('vimeo',value)
        return (
          <NextSanityVimeo value={value} />
        );
      },   
      youtube: ({ value }: any) => {
        console.log('youtube',value)
        return (
          <NextSanityYoutube value={value} />
        );
      }
      },
  };

  export default PortableTextConfiguration