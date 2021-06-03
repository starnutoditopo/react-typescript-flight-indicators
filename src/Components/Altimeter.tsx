import React from 'react'
import Instrument, { BoxStyle, InstrumentProperties } from './Instrument'
import {
  FiCircle,
  FiNeedle,
  AltitudePressure,
  AltitudeTicks,
  FiNeedleSmall
} from '../img/svgr'

type AltimeterProperties = InstrumentProperties & {
  altitude?: number
  pressure?: number
}

const Altimeter = React.memo((props: AltimeterProperties) => {
  let altitude = props.altitude ?? 0
  let needle = 90 + ((altitude % 1000) * 360) / 1000
  let needleSmall = (altitude / 10000) * 360

  let pressure = props.pressure ?? 1013.25
  pressure = 2 * pressure - 1980

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
})

export default Altimeter
