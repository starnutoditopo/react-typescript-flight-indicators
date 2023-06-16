import * as React from 'react'
import type { SVGProps } from 'react'
const SvgFiBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width='1em'
    height='1em'
    viewBox='0 0 400.667 400.666'
    {...props}
  >
    <filter id='fi_box_svg__a' filterUnits='objectBoundingBox'>
      <feGaussianBlur in='SourceAlpha' result='blur' stdDeviation={5} />
      <feOffset in='blur' result='offsetBlurredAlpha' />
      <feMerge>
        <feMergeNode in='offsetBlurredAlpha' />
        <feMergeNode in='SourceGraphic' />
      </feMerge>
    </filter>
    <g filter='url(#fi_box_svg__a)'>
      <path
        fill='#110F0F'
        d='M387.667 375c0 6.627-5.373 12-12 12h-350c-6.627 0-12-5.373-12-12V25c0-6.627 5.373-12 12-12h350c6.627 0 12 5.373 12 12v350z'
      />
      <path
        fill='none'
        stroke='#FFF'
        strokeMiterlimit={10}
        strokeWidth={0.5}
        d='M387.667 375c0 6.627-5.373 12-12 12h-350c-6.627 0-12-5.373-12-12V25c0-6.627 5.373-12 12-12h350c6.627 0 12 5.373 12 12v350z'
      />
    </g>
  </svg>
)
export default SvgFiBox
