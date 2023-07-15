import Image from 'next/image'

interface SpinningGlobeGifProps {
  height?: number
  width?: number
}

export function SpinningGlobeGif ({ height = 500, width = 500 }: SpinningGlobeGifProps) {
  return (<Image
          src="/spinningGlobe.gif"
          height={height}
          width={width}
          alt="A spinning globe GIF."
        />)
}
