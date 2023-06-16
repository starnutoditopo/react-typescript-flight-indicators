import React from 'react'
import Instrument, { BoxStyle, InstrumentProperties } from './Instrument'

import { FiCircle, VerticalMechanics, FiNeedle } from '../img/svgr'

const constants = {
  vario_bound: 1.95
}

type VariometerProperties = InstrumentProperties & {
  vario?: number
}

const Variometer = React.memo((props: VariometerProperties) => {
  let vario = (props.vario ?? 0) / 1000

  if (vario > constants.vario_bound) vario = constants.vario_bound
  else if (vario < -constants.vario_bound) vario = -constants.vario_bound

  vario = vario * 90

  return (
    <Instrument {...props}>
      <VerticalMechanics className='box' style={BoxStyle} />
      <div
        className='vario box'
        style={{ ...BoxStyle, transform: `rotate(${vario}deg)` }}
      >
        <FiNeedle className='box' style={BoxStyle} />
      </div>
      <div className='mechanics box' style={BoxStyle}>
        <FiCircle className='box' style={BoxStyle} />
      </div>
    </Instrument>
  )
})

export default Variometer
