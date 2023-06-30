import {
    HeadingIndicator,
    Variometer,
    TurnCoordinator,
    Airspeed,
    Altimeter,
    AttitudeIndicator,
} from "react-typescript-flight-indicators";

const App = () => {
    return (
        <div>
            <div style={{ display: "flex", marginTop: 4, marginBottom: 4 }}>
                <HeadingIndicator
                    heading={Math.random() * 360}
                    showBox={false}
                />
                <HeadingIndicator
                    heading={Math.random() * 360}
                    showBox={false}
                    size={"200px"}
                />
            </div>
            <div style={{ display: "flex", marginTop: 4, marginBottom: 4 }}>
                <Variometer
                    vario={(Math.random() - 0.5) * 4000}
                    showBox={false}
                />
                <Variometer
                    vario={(Math.random() - 0.5) * 4000}
                    showBox={false}
                    size={"200px"}
                />
            </div>
            <div style={{ display: "flex", marginTop: 4, marginBottom: 4 }}>
                <TurnCoordinator
                    turn={(Math.random() - 0.5) * 120}
                    showBox={false}
                />
                <TurnCoordinator
                    turn={(Math.random() - 0.5) * 120}
                    showBox={false}
                    size={"200px"}
                />
            </div>
            <div style={{ display: "flex", marginTop: 4, marginBottom: 4 }}>
                <Airspeed speed={Math.random() * 160} showBox={false} />
                <Airspeed speed={Math.random() * 160} showBox={false} size={"200px"} />
            </div>
            <div style={{ display: "flex", marginTop: 4, marginBottom: 4 }}>
                <Altimeter altitude={Math.random() * 28000} showBox={false} />
                <Altimeter altitude={Math.random() * 28000} showBox={false} size={"200px"} />
            </div>
            <div style={{ display: "flex", marginTop: 4, marginBottom: 4 }}>
                <AttitudeIndicator
                    roll={(Math.random() - 0.5) * 120}
                    pitch={(Math.random() - 0.5) * 40}
                    showBox={false}
                />
                <AttitudeIndicator
                    roll={(Math.random() - 0.5) * 120}
                    pitch={(Math.random() - 0.5) * 40}
                    showBox={false}
                    size={"200px"}
                />
            </div>
        </div>
    );
};

export default App;
