import * as React from "react";
import type { SVGProps } from "react";
const SvgFiNeedleSmall = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="1em"
        height="1em"
        viewBox="0 0 400.667 400.666"
        {...props}
    >
        <filter id="fi_needle_small_svg__a" filterUnits="objectBoundingBox">
            <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation={5} />
            <feOffset in="blur" result="offsetBlurredAlpha" />
            <feMerge>
                <feMergeNode in="offsetBlurredAlpha" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <g filter="url(#fi_needle_small_svg__a)">
            <path
                fill="#FFF"
                d="m211.838 160.802-11.495-28.434-.005.018-.005-.018-11.495 28.434L200.333 207l.005-.023.005.023z"
            />
            <path
                fill="none"
                stroke="#B2B2B2"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="m211.838 160.802-11.495-28.434-.005.018-.005-.018-11.495 28.434L200.333 207l.005-.023.005.023z"
            />
        </g>
        <g filter="url(#fi_needle_small_svg__a)">
            <path
                fill="#232323"
                d="M200.331 196.091s-9.492 18.192-9.331 24.818c.062 2.56 1.828 4.228 9.331 4.228s9.114-1.709 9.146-4.228c.083-6.507-8.809-24.493-8.809-24.493"
            />
            <path
                fill="none"
                stroke="#353535"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="M200.331 196.091s-9.492 18.192-9.331 24.818c.062 2.56 1.828 4.228 9.331 4.228s9.114-1.709 9.146-4.228c.083-6.507-8.809-24.493-8.809-24.493"
            />
        </g>
    </svg>
);
export default SvgFiNeedleSmall;
