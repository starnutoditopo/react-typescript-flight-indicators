import React from 'react'
import Instrument, { BoxStyle, InstrumentProperties } from './Instrument'
import { FiCircle, FiNeedle, SpeedMechanics } from '../img/svgr'

const constants = {
  airspeed_bound_l: 0,
  airspeed_bound_h: 160
}

type AirspeedProperties = InstrumentProperties & {
  speed?: number
}

const Airspeed = React.memo((props: AirspeedProperties) => {
  let speed = props.speed ?? 0

  if (speed > constants.airspeed_bound_h) speed = constants.airspeed_bound_h
  else if (speed < constants.airspeed_bound_l)
    speed = constants.airspeed_bound_l

  speed = 90 + speed * 2

  return (
    <Instrument {...props}>
      <SpeedMechanics className='box' style={BoxStyle} />
      <div
        className='speed box'
        style={{ ...BoxStyle, transform: `rotate(${speed}deg)` }}
      >
        <FiNeedle className='box' style={BoxStyle} />
      </div>
      <div className='mechanics box' style={BoxStyle}>
        <FiCircle className='box' style={BoxStyle} />
      </div>
    </Instrument>
  )
})

export default Airspeed
