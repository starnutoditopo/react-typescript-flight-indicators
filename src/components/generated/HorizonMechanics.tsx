import * as React from "react";
import type { SVGProps } from "react";
const SvgHorizonMechanics = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="1em"
        height="1em"
        viewBox="0 0 400.667 400.666"
        {...props}
    >
        <filter id="horizon_mechanics_svg__a" filterUnits="objectBoundingBox">
            <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation={5} />
            <feOffset in="blur" result="offsetBlurredAlpha" />
            <feMerge>
                <feMergeNode in="offsetBlurredAlpha" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <path
            fill="none"
            stroke="#FF7F00"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={5}
            d="M130 200.457h46M225 200.457h46M200.534 200.457h0M200.399 103.417l-9.916 27.166M190.483 130.583h19.833M210.316 130.583l-9.917-27.166"
        />
        <g filter="url(#horizon_mechanics_svg__a)">
            <path
                fill="#232323"
                d="M82.663 298.167c28.157 33.81 70.564 55.333 118.004 55.333s89.847-21.524 118.004-55.333H82.663z"
            />
            <path
                fill="none"
                stroke="#353535"
                strokeMiterlimit={10}
                strokeWidth={1.3}
                d="M82.663 298.167c28.157 33.81 70.564 55.333 118.004 55.333s89.847-21.524 118.004-55.333H82.663z"
            />
        </g>
        <path
            fill="none"
            stroke="#FFF"
            strokeMiterlimit={10}
            strokeWidth={4}
            d="M200.667 298.667v30.5M254.667 298.667v10.25M146.667 298.667v10.25"
        />
        <g filter="url(#horizon_mechanics_svg__a)" />
    </svg>
);
export default SvgHorizonMechanics;
