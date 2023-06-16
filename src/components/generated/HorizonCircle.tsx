import * as React from "react";
import type { SVGProps } from "react";
const SvgHorizonCircle = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="1em"
        height="1em"
        viewBox="0 0 400.667 400.666"
        {...props}
    >
        <filter id="horizon_circle_svg__b" filterUnits="objectBoundingBox">
            <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation={5} />
            <feOffset in="blur" result="offsetBlurredAlpha" />
            <feMerge>
                <feMergeNode in="offsetBlurredAlpha" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <linearGradient
            id="horizon_circle_svg__a"
            x1={200.667}
            x2={200.667}
            y1={349.933}
            y2={50.4}
            gradientUnits="userSpaceOnUse"
        >
            <stop
                offset={0.5}
                style={{
                    stopColor: "#503723",
                }}
            />
            <stop
                offset={0.5}
                style={{
                    stopColor: "#558ebb",
                }}
            />
        </linearGradient>
        <path
            fill="url(#horizon_circle_svg__a)"
            d="M200.667 50.4C117.953 50.4 50.9 117.453 50.9 200.167s67.053 149.767 149.767 149.767 149.767-67.053 149.767-149.767S283.38 50.4 200.667 50.4zm0 250.1c-55.413 0-100.334-44.921-100.334-100.334 0-55.412 44.921-100.333 100.334-100.333 55.412 0 100.333 44.92 100.333 100.333S256.079 300.5 200.667 300.5z"
            filter="url(#horizon_circle_svg__b)"
        />
        <path
            fill="none"
            stroke="#FFF"
            strokeMiterlimit={10}
            strokeWidth={4}
            d="M50.667 200.333h49.666M300.749 200.333h49.684M78.415 131.582l33.667 20.333M288.751 151.915l34.834-20.333M149.418 113.75l-20-34.5M252.084 113.75l20.667-34.5"
        />
        <path
            fill="#FFF"
            d="M185.918 60.085h29.333l-14.666 38.833zM119.084 117.417l-7.002 6.834 14.502 7.331zM274.084 131.582l7.167-14.165 7.5 7.083z"
        />
    </svg>
);
export default SvgHorizonCircle;
