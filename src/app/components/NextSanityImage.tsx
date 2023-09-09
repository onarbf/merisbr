'use client'
import {useNextSanityImage} from 'next-sanity-image'
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';



export const SanityImage = ({ asset }: any) => {
  const imageProps: any = useNextSanityImage(client, asset);

  if (!imageProps) return null;

  return (<Image 
    {...imageProps}
    layout='responsive'
    alt="meaningful"
    sizes='(max-width: 800px) 100vw, 800px'
  />);
}