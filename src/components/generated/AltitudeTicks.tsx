import * as React from "react";
import type { SVGProps } from "react";
const SvgAltitudeTicks = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="1em"
        height="1em"
        viewBox="0 0 400.667 400.666"
        {...props}
    >
        <filter id="altitude_ticks_svg__a" filterUnits="objectBoundingBox">
            <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation={5} />
            <feOffset in="blur" result="offsetBlurredAlpha" />
            <feMerge>
                <feMergeNode in="offsetBlurredAlpha" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <path
            fill="#232323"
            d="M200.333 47c-84.497 0-153 68.503-153 153s68.503 153 153 153 153-68.503 153-153-68.502-153-153-153zm75.517 174.422A78.5 78.5 0 0 0 278.834 200a78.49 78.49 0 0 0-2.958-21.332l49.113-13.869c3.155 11.193 4.846 23 4.846 35.201 0 12.256-1.704 24.114-4.886 35.351l-49.099-13.929z"
            filter="url(#altitude_ticks_svg__a)"
        />
        <path
            fill="none"
            stroke="#FFF"
            strokeMiterlimit={10}
            strokeWidth={4}
            d="M200.333 49.902v23.432M288.559 78.569l-13.773 18.956M343.084 153.619l-22.285 7.24M320.799 239.144l22.284 7.241M288.556 321.434l-13.772-18.957M200.331 350.1v-23.433M112.105 321.433l13.773-18.957M57.579 246.383l22.285-7.24M57.58 153.617l22.284 7.24M112.106 78.568l13.773 18.955"
        />
        <path
            fill="none"
            stroke="#FFF"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="m219.147 51.091-2 15.852M237.662 54.623l-3.971 15.478M255.588 60.448l-5.879 14.859M272.643 68.475l-7.695 14.004M303.079 90.591l-10.934 11.649M315.981 104.331l-12.309 10.188M327.059 119.58l-13.488 8.565M336.139 136.098l-14.455 6.805M350.125 190.58l-15.945 1.007M347.763 171.88l-15.693 2.998M350.125 209.429l-15.946-1M347.762 228.129l-15.695-2.991M336.135 263.91l-14.459-6.801M327.054 280.427l-13.492-8.559M315.975 295.675l-12.312-10.182M303.073 309.415l-10.941-11.645M272.635 331.528l-7.701-14.001M255.58 339.554l-5.886-14.857M237.654 345.378l-3.978-15.478M219.139 348.909l-2.006-15.853M181.515 348.907l2.001-15.853M163 345.375l3.972-15.479M145.074 339.55l5.881-14.859M128.02 331.523l7.697-14.003M97.583 309.409l10.938-11.651M84.68 295.669l12.312-10.19M73.602 280.42l13.492-8.566M64.521 263.902l14.46-6.807M52.896 228.12l15.699-2.997M50.534 209.42l15.951-1.006M50.535 190.571l15.951 1.001M52.897 171.871l15.701 2.992M64.524 136.089l14.464 6.803M73.605 119.571l13.498 8.563M84.685 104.322l12.318 10.188M97.589 90.582l10.944 11.651M128.027 68.468l7.703 14.008M145.083 60.442l5.886 14.864M163.01 54.618l3.977 15.485M181.525 51.087l2.005 15.861"
        />
        <text
            fill="#FFF"
            stroke="#FFF"
            strokeMiterlimit={10}
            fontFamily="sans-serif"
            fontSize={25}
            transform="translate(193.548 98.815)"
        >
            {"0"}
        </text>
        <text
            fill="#FFF"
            stroke="#FFF"
            strokeMiterlimit={10}
            strokeWidth={0.5}
            fontFamily="sans-serif"
            fontSize={25}
            transform="translate(176.656 162.587)"
        >
            {"ALT"}
        </text>
        <text
            fill="#FFF"
            stroke="#FFF"
            strokeMiterlimit={10}
            fontFamily="sans-serif"
            fontSize={25}
            transform="translate(257.16 120.982)"
        >
            {"1"}
        </text>
        <text
            fill="#FFF"
            stroke="#FFF"
            strokeMiterlimit={10}
            fontFamily="sans-serif"
            fontSize={25}
            transform="translate(299.492 160.877)"
        >
            {"2"}
        </text>
        <text
            fill="#FFF"
            stroke="#FFF"
            strokeMiterlimit={10}
            fontFamily="sans-serif"
            fontSize={25}
            transform="translate(299.492 256.763)"
        >
            {"3"}
        </text>
        <text
            fill="#FFF"
            stroke="#FFF"
            strokeMiterlimit={10}
            fontFamily="sans-serif"
            fontSize={25}
            transform="translate(258.91 295.232)"
        >
            {"4"}
        </text>
        <text
            fill="#FFF"
            stroke="#FFF"
            strokeMiterlimit={10}
            fontFamily="sans-serif"
            fontSize={25}
            transform="translate(193.66 318.482)"
        >
            {"5"}
        </text>
        <text
            fill="#FFF"
            stroke="#FFF"
            strokeMiterlimit={10}
            fontFamily="sans-serif"
            fontSize={25}
            transform="translate(89.16 242.763)"
        >
            {"7"}
        </text>
        <text
            fill="#FFF"
            stroke="#FFF"
            strokeMiterlimit={10}
            fontFamily="sans-serif"
            fontSize={25}
            transform="translate(87.16 175.232)"
        >
            {"8"}
        </text>
        <text
            fill="#FFF"
            stroke="#FFF"
            strokeMiterlimit={10}
            fontFamily="sans-serif"
            fontSize={25}
            transform="translate(129.91 119.982)"
        >
            {"9"}
        </text>
        <path
            fill="none"
            d="m174.243 243.809 61.533 38.566a89.298 89.298 0 0 0 8.936-4.471l-66.101-41.43-4.368 7.335zM165.159 259.06l47.482 29.761a89.123 89.123 0 0 0 12.055-2.517l-55.169-34.578-4.368 7.334zM214.732 238.17a40.203 40.203 0 0 1-11.956 2.578l34.692 21.744-9.571-16.07-13.165-8.252zM156.076 274.312l18.447 11.562a89.369 89.369 0 0 0 21.967 3.696l-36.045-22.592-4.369 7.334z"
        />
        <path
            fill="#FFF"
            d="M154.451 277.04a89.218 89.218 0 0 0 20.072 8.833l-18.447-11.562-1.625 2.729zM160.444 266.978l36.045 22.592c1.275.054 2.555.09 3.844.09 4.176 0 8.285-.286 12.308-.839l-47.482-29.761-4.715 7.918zM169.527 251.726l55.169 34.578a88.997 88.997 0 0 0 11.079-3.929l-61.533-38.566-4.715 7.917zM200.333 240.833a40.288 40.288 0 0 1-20.868-5.794l-.855 1.437 66.101 41.43c.482-.275.967-.544 1.443-.828l-8.686-14.584-34.692-21.744c-.809.047-1.621.083-2.443.083zM221.14 235.076a40.442 40.442 0 0 1-6.408 3.095l13.165 8.252-6.757-11.347z"
        />
        <text
            fill="#FFF"
            fontFamily="sans-serif"
            fontSize={11}
            transform="translate(209.888 81.333)"
        >
            {"FEET"}
        </text>
        <text
            fill="#FFF"
            fontFamily="sans-serif"
            fontSize={11}
            transform="translate(174.315 81.333)"
        >
            {"100"}
        </text>
        <text
            fill="#FFF"
            fontFamily="sans-serif"
            fontSize={11}
            transform="translate(175.376 137.582)"
        >
            {"1000 FEET"}
        </text>
        <text transform="translate(104.334 191.915)">
            <tspan
                x={0}
                y={0}
                fill="#FFF"
                fontFamily="sans-serif"
                fontSize={12}
            >
                {"CALIBRATED"}
            </tspan>
            <tspan
                x={24.453}
                y={12}
                fill="#FFF"
                fontFamily="sans-serif"
                fontSize={12}
            >
                {"TO"}
            </tspan>
            <tspan
                x={1.936}
                y={24}
                fill="#FFF"
                fontFamily="sans-serif"
                fontSize={12}
            >
                {"25 000 FEET"}
            </tspan>
        </text>
    </svg>
);
export default SvgAltitudeTicks;
