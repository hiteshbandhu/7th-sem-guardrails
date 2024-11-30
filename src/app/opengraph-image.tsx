import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'hit.rails | AI Guardrails for LLM Applications'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #081219 0%, #204763 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 
              'linear-gradient(#18354a 1px, transparent 1px), linear-gradient(90deg, #18354a 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.08,
            transform: 'skewY(-2deg)',
          }}
        />

        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            padding: '56px 64px',
            background: 'rgba(32, 71, 99, 0.95)',
            borderRadius: '20px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(150, 192, 221, 0.1)',
          }}
        >
          <h1
            style={{
              fontSize: '84px',
              color: '#fcfcff',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              margin: 0,
              textAlign: 'center',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            hit.rails
          </h1>
          
          <p
            style={{
              fontSize: '36px',
              color: '#b3d4e8',
              fontFamily: 'Space Grotesk',
              margin: 0,
              textAlign: 'center',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            AI Guardrails for LLM Applications
          </p>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '8px',
            }}
          >
            <div
              style={{
                padding: '12px 24px',
                background: 'rgba(40, 88, 123, 0.9)',
                borderRadius: '12px',
                color: '#fcfcff',
                fontSize: '24px',
                fontFamily: 'Space Grotesk',
                fontWeight: 500,
                border: '1px solid rgba(150, 192, 221, 0.2)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
            >
              Prompt Filtering
            </div>
            <div
              style={{
                padding: '12px 24px',
                background: 'rgba(40, 88, 123, 0.9)',
                borderRadius: '12px',
                color: '#fcfcff',
                fontSize: '24px',
                fontFamily: 'Space Grotesk',
                fontWeight: 500,
                border: '1px solid rgba(150, 192, 221, 0.2)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
            >
              Safe Outputs
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
