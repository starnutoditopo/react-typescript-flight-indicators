import * as React from 'react'
import type { SVGProps } from 'react'
const SvgFiNeedle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width='1em'
    height='1em'
    viewBox='0 0 400.667 400.666'
    {...props}
  >
    <filter id='fi_needle_svg__a' filterUnits='objectBoundingBox'>
      <feGaussianBlur in='SourceAlpha' result='blur' stdDeviation={5} />
      <feOffset in='blur' result='offsetBlurredAlpha' />
      <feMerge>
        <feMergeNode in='offsetBlurredAlpha' />
        <feMergeNode in='SourceGraphic' />
      </feMerge>
    </filter>
    <g strokeMiterlimit={10} strokeWidth={0.5} filter='url(#fi_needle_svg__a)'>
      <path
        fill='#FFF'
        stroke='#B2B2B2'
        d='M76.445 196.417 68.082 200l8.341 3.583h107.911v-7.166z'
      />
      <path
        fill='#232323'
        stroke='#353535'
        d='M239.042 196.417c-3.563-3.563-8.918 0-13.063 0H210.862c-1.51-4.271-5.573-7.337-10.362-7.337s-8.852 3.065-10.362 7.337h-5.804v7.167h5.745c1.464 4.355 5.572 7.496 10.42 7.496s8.956-3.141 10.42-7.496H226.04c3.874 0 9.458 3.542 13 0 2.084-2.083 2.21-4.959.002-7.167z'
      />
    </g>
  </svg>
)
export default SvgFiNeedle
