import React from 'react'
import Instrument, { BoxStyle, InstrumentProperties } from './Instrument'
import {
  FiCircle,
  FiNeedle,
  AltitudePressure,
  AltitudeTicks,
  FiNeedleSmall
} from './generated'

type AltimeterProperties = InstrumentProperties & {
  altitude?: number
  pressure?: number
}

function Altimeter(props: AltimeterProperties) {
  const altitude = props.altitude ?? 0
  const needle = 90 + ((altitude % 1000) * 360) / 1000
  const needleSmall = (altitude / 10000) * 360

  const pressure = 2 * (props.pressure ?? 1013.25) - 1980

  return (
    <Instrument {...props}>
      <div
        className='pressure box'
        style={{ ...BoxStyle, transform: `rotate(${pressure}deg)` }}
      >
        <AltitudePressure className='box' style={BoxStyle} />
      </div>
      <AltitudeTicks className='box' style={BoxStyle} />
      <div
        className='needleSmall box'
        style={{ ...BoxStyle, transform: `rotate(${needleSmall}deg)` }}
      >
        <FiNeedleSmall className='box' style={BoxStyle} />
      </div>
      <div
        className='needle box'
        style={{ ...BoxStyle, transform: `rotate(${needle}deg)` }}
      >
        <FiNeedle className='box' style={BoxStyle} />
      </div>
      <div className='mechanics box' style={BoxStyle}>
        <FiCircle className='box' style={BoxStyle} />
      </div>
    </Instrument>
  )
}

export default React.memo(Altimeter);
