import React from "react";

import { FiBox } from "./generated";

const boxStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
} as React.CSSProperties;

export type InstrumentProperties = {
    showBox?: boolean;
    size?: string;
};

function Instrument(
    props: InstrumentProperties & { children?: React.ReactNode },
) {
    const { children, size = "250px", showBox = true } = props;
    const backgroundBox = showBox ? (
        <FiBox className="background box" style={boxStyle} />
    ) : null;

    return (
        <div
            className="instrument heading"
            style={{
                height: size,
                width: size,
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
            }}
        >
            {backgroundBox}
            {children}
        </div>
    );
}
export default React.memo(Instrument);
export const BoxStyle = boxStyle;
