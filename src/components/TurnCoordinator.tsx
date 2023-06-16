import React from "react";
import Instrument, { BoxStyle } from "./Instrument";
import type { InstrumentProperties } from "./Instrument";

import {
    FiCircle,
    TurnCoordinator as TurnCoordinatorImage,
    FiTcAirplane,
} from "./generated";

type TurnCoordinatorProperties = InstrumentProperties & {
    turn?: number;
};

function TurnCoordinator(props: TurnCoordinatorProperties) {
    return (
        <Instrument {...props}>
            <TurnCoordinatorImage className="box" style={BoxStyle} />
            <div
                className="turn box"
                style={{ ...BoxStyle, transform: `rotate(${props.turn}deg)` }}
            >
                <FiTcAirplane className="box" style={BoxStyle} />
            </div>
            <div className="mechanics box" style={BoxStyle}>
                <FiCircle className="box" style={BoxStyle} />
            </div>
        </Instrument>
    );
}

export default React.memo(TurnCoordinator);
