import * as React from "react";
import type { SVGProps } from "react";
const SvgHorizonBack = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="1em"
        height="1em"
        viewBox="0 0 400.667 400.666"
        {...props}
    >
        <linearGradient
            id="horizon_back_svg__a"
            x1={200.667}
            x2={200.667}
            y1={350.099}
            y2={50.566}
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
        <circle
            cx={200.667}
            cy={200.333}
            r={149.767}
            fill="url(#horizon_back_svg__a)"
        />
    </svg>
);
export default SvgHorizonBack;
