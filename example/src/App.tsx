import React from "react";

import {
    HeadingIndicator,
    Variometer,
    TurnCoordinator,
    Airspeed,
    Altimeter,
    AttitudeIndicator,
} from "react-typescript-flight-indicators";
//import 'react-typescript-flight-indicators/dist/index.css'

const App = () => {
    return (
        <>
            <HeadingIndicator heading={Math.random() * 360} showBox={false} />
            <hr />
            <Variometer vario={(Math.random() - 0.5) * 4000} showBox={false} />
            <hr />
            <TurnCoordinator
                turn={(Math.random() - 0.5) * 120}
                showBox={false}
            />
            <hr />
            <Airspeed speed={Math.random() * 160} showBox={false} />
            <hr />
            <Altimeter altitude={Math.random() * 28000} showBox={false} />
            <hr />
            <AttitudeIndicator
                roll={(Math.random() - 0.5) * 120}
                pitch={(Math.random() - 0.5) * 40}
                showBox={false}
            />
        </>
    );
};

export default App;
