const React = require('react');
const { View } = require('react-native');

module.exports = {
    __esModule: true, // this is important for handling `import ViewShot from ...`
    default: React.forwardRef((props, ref) => {
        return <View ref={ref} {...props} />;
    }),
    captureRef: jest.fn(() => Promise.resolve('mockedImageUri')),
    captureScreen: jest.fn(() => Promise.resolve('mockedScreenUri')),
};