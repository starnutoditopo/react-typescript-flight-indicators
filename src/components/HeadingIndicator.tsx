import React from "react";
import Instrument, { BoxStyle, InstrumentProperties } from "./Instrument";

import { FiCircle, HeadingMechanics, HeadingYaw } from "./generated";

type HeadingIndicatorProps = InstrumentProperties & {
    heading?: number;
};

function HeadingIndicator(props: HeadingIndicatorProps) {
    return (
        <Instrument {...props}>
            <div
                className="heading box"
                style={{
                    ...BoxStyle,
                    transform: `rotate(${-(props.heading ?? 0)}deg)`,
                }}
            >
                <HeadingYaw className="box" style={BoxStyle} />
            </div>
            <div className="mechanics box" style={BoxStyle}>
                <HeadingMechanics className="box" style={BoxStyle} />
                <FiCircle className="box" style={BoxStyle} />
            </div>
        </Instrument>
    );
}

export default React.memo(HeadingIndicator);
