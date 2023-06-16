import React from "react";
import Instrument, { BoxStyle, InstrumentProperties } from "./Instrument";

import {
    FiCircle,
    HorizonBack,
    HorizonBall,
    HorizonCircle,
    HorizonMechanics,
} from "./generated";

const constants = {
    pitch_bound: 30,
};

type AttitudeIndicatorProperties = InstrumentProperties & {
    pitch?: number;
    roll?: number;
};

function AttitudeIndicator(props: AttitudeIndicatorProperties) {
    let pitch = props.pitch ?? 0;
    if (pitch > constants.pitch_bound) {
        pitch = constants.pitch_bound;
    } else if (pitch < -constants.pitch_bound) {
        pitch = -constants.pitch_bound;
    }

    return (
        <Instrument {...props}>
            <div
                className="roll box"
                style={{
                    ...BoxStyle,
                    top: "0%",
                    transform: `rotate(${props.roll ?? 0}deg)`,
                }}
            >
                <HorizonBack className="box" style={{ ...BoxStyle }} />
                <div
                    className="pitch box"
                    style={{ ...BoxStyle, top: `${pitch * 0.7}%` }}
                >
                    <HorizonBall className="box" style={BoxStyle} />
                </div>
                <HorizonCircle className="box" style={BoxStyle} />
            </div>
            <div className="mechanics box" style={BoxStyle}>
                <HorizonMechanics className="box" style={BoxStyle} />
                <FiCircle className="box" style={BoxStyle} />
            </div>
        </Instrument>
    );
}

export default React.memo(AttitudeIndicator);
