import * as C from './styles'

import { CharacterType } from '../../types/ChracterTypes'

interface Props{
    x:number,
    y:number,
    side: CharacterType
}

export const Character = ({ x, y, side }:Props) => {
    const size = 30
    const sides={
        up: -90,
        left: -30,
        right: -60,
        down: 0
    }

  return (
    <C.Container
        size={size}
        left={x * size}
        top={y * size}
        sidePos={sides[side] ?? 0}
        >
        
    </C.Container>
  )
}
