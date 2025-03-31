import { useState } from "react"

const HomeViewController = () => {
    const [currentState, setCurrentState] = useState<number>(0);
    const [updateColor, setUpdateColor] = useState<string>('#FFFFFF');

    const updateTshirtState = () => {
        console.log("Called ", currentState)
        let state = currentState === 0 ? 1 : 0;
        setCurrentState(state);
    };

    const updateTshirtColor = (color: string) => {
        setUpdateColor(color);
    };


    return {
        currentState,
        updateTshirtState,
        updateColor,
        updateTshirtColor,
    };
};


export default HomeViewController;
