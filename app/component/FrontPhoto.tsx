import React from 'react';
import Svg, { G, Path, Polygon, Polyline } from 'react-native-svg';

type props = {
    color: string
}

const FrontPhoto = ({ color }: props) => {
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
            <Polygon
                fill={color}
                points="504.368,156.676 400.384,52.692 399.416,51.5 399.576,51.86 399.464,51.772 399.416,51.5  310.792,20.316 193.576,20.316 104.808,51.548 104.808,51.548 104.968,51.66 104.808,51.788 103.984,52.652 24.496,181.14  77.304,235.212 115.456,195.828 115.456,484.316 387.456,484.316 387.456,195.828 426.336,235.22 "
            />
            <Polyline
                fill={color}
                points="195.456,484.316 387.456,484.316 387.456,195.828 426.336,235.22 504.632,156.676  399.4,51.772 399.584,51.86 399.584,51.86 399.472,51.772 399.424,51.5 310.792,20.316 195.456,20.316 "
            />
            <G>
                <Polyline
                    fill={color}
                    points="386.416,195.828 426.688,235.22 504.368,156.676 399.416,51.82 399.576,51.86  399.576,51.86 399.464,51.772 399.416,51.82  "
                />
                <Path
                    fill={"#B20606"}
                    d="M252.56,116.316c5.8-16,64.184-90.248,65.184-92.064l-22.952-3.936h-85.216l-22.936,3.936 c1,1.816,59.384,76.064,65.168,92.064H252.56z"
                />
            </G>
            <Path
                fill={"#4F0606"}
                d="M252.56,100.316c5.8-16,64.184-74.248,65.184-76.064l-22.952-3.936h-85.216l-22.936,3.936 c1,1.816,59.384,60.064,65.168,76.064H252.56z"
            />
            <Path
                fill={"#2D0202"}
                d="M252.56,100.316c5.8-16,64.184-74.248,65.184-76.064l-22.952,4.064h-85.216l-22.936-4.064 c1,1.816,59.384,60.064,65.168,76.064H252.56z"
            />
        </Svg>
    );
};

export default FrontPhoto;
