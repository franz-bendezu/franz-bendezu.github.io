import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'nodejs'
 
// Image metadata
export const alt = 'Franz Bendezu'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

export function generateImageMetadata() {
    return [
      {
        contentType: 'image/png',
        id: 'small',
        size: { width: 300, height: 157 },
      },
      {
        contentType: 'image/png',
        id: 'medium',
        size: { width: 600, height: 315 },
      },
      {
        contentType: 'image/png',
        id: 'large',
        size: { width: 1200, height: 630 },
      },
    ]
  }
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Franz Bendezu
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}