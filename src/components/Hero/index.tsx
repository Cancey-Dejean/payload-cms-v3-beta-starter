import Image from 'next/image'
import RichText from '@/components/RichText'

export default function Hero({ headline, bodyText, image }: {
  headline: string
  bodyText: any
  image: {
    alt: string
    url?: string
    width?: number
    height?: number
  }
}) {
  return (
    <div>
      <h1>{headline}</h1>
  
      <RichText
        className="prose"
        content={bodyText}
      />

      {image && (
        <Image src={image.url || ''} alt="Image" width={image.width} height={image.height} />
      )}


      {/*{image.url !== null && (*/}
      {/*  <Image src={image.url || ''} alt="Image" width={image.width} height={image.height} />*/}
      {/*)}*/}

    </div>
  )
}
