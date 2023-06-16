import * as React from 'react'
import type { SVGProps } from 'react'
const SvgFiCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width='1em'
    height='1em'
    viewBox='0 0 400.667 400.666'
    {...props}
  >
    <filter id='fi_circle_svg__a' filterUnits='objectBoundingBox'>
      <feGaussianBlur in='SourceAlpha' result='blur' stdDeviation={5} />
      <feOffset in='blur' result='offsetBlurredAlpha' />
      <feMerge>
        <feMergeNode in='offsetBlurredAlpha' />
        <feMergeNode in='SourceGraphic' />
      </feMerge>
    </filter>
    <g filter='url(#fi_circle_svg__a)'>
      <path
        fill='#232323'
        d='M200.333 33.5c-91.956 0-166.5 74.544-166.5 166.5s74.544 166.5 166.5 166.5c91.957 0 166.5-74.544 166.5-166.5S292.29 33.5 200.333 33.5zm.334 316.599c-82.714 0-149.767-67.053-149.767-149.767 0-82.713 67.053-149.767 149.767-149.767s149.767 67.053 149.767 149.767c-.001 82.714-67.054 149.767-149.767 149.767z'
      />
      <path
        fill='none'
        stroke='#353535'
        strokeMiterlimit={10}
        strokeWidth={1.3}
        d='M200.333 33.5c-91.956 0-166.5 74.544-166.5 166.5s74.544 166.5 166.5 166.5c91.957 0 166.5-74.544 166.5-166.5S292.29 33.5 200.333 33.5zm.334 316.599c-82.714 0-149.767-67.053-149.767-149.767 0-82.713 67.053-149.767 149.767-149.767s149.767 67.053 149.767 149.767c-.001 82.714-67.054 149.767-149.767 149.767z'
      />
    </g>
  </svg>
)
export default SvgFiCircle
