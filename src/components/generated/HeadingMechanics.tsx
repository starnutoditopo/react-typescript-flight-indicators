import * as React from 'react'
import type { SVGProps } from 'react'
const SvgHeadingMechanics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width='1em'
    height='1em'
    viewBox='0 0 400.667 400.666'
    {...props}
  >
    <filter id='heading_mechanics_svg__a' filterUnits='objectBoundingBox'>
      <feGaussianBlur in='SourceAlpha' result='blur' stdDeviation={5} />
      <feOffset in='blur' result='offsetBlurredAlpha' />
      <feMerge>
        <feMergeNode in='offsetBlurredAlpha' />
        <feMergeNode in='SourceGraphic' />
      </feMerge>
    </filter>
    <g filter='url(#heading_mechanics_svg__a)'>
      <path
        fill='none'
        stroke='#FF2A00'
        strokeMiterlimit={10}
        strokeWidth={3}
        d='M200.38 81.417s-7.042 11.625-11.292 24.75-7.125 51.375-7.125 51.375l-54.213 39.3s-13.543 8.502-16.3 15.598c-.958 2.468-1.491 5.852-1.612 7.852-.222 3.681 0 13.749 0 13.75.125 2.125 1.5 3.875 6 2.375s69.5-23.125 69.5-23.125l2.75 54.25s-16.723 12.949-21.875 17.75c-1.232 1.148-3.054 2.765-4.063 4.875-1.045 2.187-1.161 5.537-1.188 7.25-.038 2.437-.131 8.147.188 9.063.5 1.438 1.063 1.918 3.135 1.918 2.625 0 12.928-5.73 12.928-5.73l18.75-9.25 4.333 12.25-4.333-12.25 4.333 12.25h.168l4.333-12.25 18.75 9.25s10.303 5.73 12.928 5.73c2.072 0 2.635-.48 3.135-1.918.318-.916.226-6.625.188-9.063-.027-1.713-.143-5.063-1.188-7.25-1.008-2.11-2.83-3.727-4.063-4.875-5.152-4.801-21.875-17.75-21.875-17.75l2.75-54.25s65 21.625 69.5 23.125 5.875-.25 6-2.375c0-.001.222-10.069 0-13.75-.121-2-.653-5.384-1.612-7.852-2.756-7.096-16.3-15.598-16.3-15.598l-54.213-39.3s-2.875-38.25-7.125-51.375-11.292-24.75-11.292-24.75V61'
      />
    </g>
    <g filter='url(#heading_mechanics_svg__a)'>
      <path fill='#FF2A00' d='m200.381 332.311-5.839 12.128h12z' />
    </g>
    <g filter='url(#heading_mechanics_svg__a)'>
      <path fill='#FFF' d='m294.272 294.239 4.471 12.771 8.529-8.529z' />
    </g>
    <g filter='url(#heading_mechanics_svg__a)'>
      <path fill='#FFF' d='m105.938 294.771-11.792 4.127 7.874 7.873z' />
    </g>
    <g filter='url(#heading_mechanics_svg__a)'>
      <path fill='#FF2A00' d='m68.291 200.382-12-5.778v11.873z' />
    </g>
    <g filter='url(#heading_mechanics_svg__a)'>
      <path fill='#FFF' d='m106.001 106.041-4.2-12-8.014 8.014z' />
    </g>
    <g filter='url(#heading_mechanics_svg__a)'>
      <path fill='#FFF' d='m294.731 105.894 11.788-4.127-7.873-7.873z' />
    </g>
    <g filter='url(#heading_mechanics_svg__a)'>
      <path fill='#FF2A00' d='m332.311 200.285 12.129 5.84.001-12z' />
    </g>
    <g filter='url(#heading_mechanics_svg__a)'>
      <path fill='#FF2A00' d='m200.619 68.022 5.839-12.129-12-.001z' />
    </g>
  </svg>
)
export default SvgHeadingMechanics
