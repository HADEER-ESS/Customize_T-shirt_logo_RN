import React from 'react'
import Svg, { Polygon } from 'react-native-svg'


type props = {
    color: string
}

const BackPhoto = ({ color }: props) => {
    return (
        <Svg
            x="0px"
            y="0px"
            style={{
                marginTop: 22,
                height: 400
            }}
            viewBox="0 0 504.632 504.632"
        >
            <Polygon
                fill={color}
                points="504.368,156.676 400.384,52.692 399.576,51.86 399.576,51.86 399.464,51.772 399.416,51.5  310.792,20.316 193.576,20.316 104.968,51.5 104.904,51.612 104.808,51.788 104.904,51.612 103.984,52.668 0,156.668 77.304,235.22  115.456,195.828 115.456,484.316 387.456,484.316 387.456,195.828 426.336,235.22 "
            />
        </Svg>
    )
}

export default BackPhoto