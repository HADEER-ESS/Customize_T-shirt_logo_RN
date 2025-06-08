export const CameraRoll = {
    getPhotos: jest.fn(() => Promise.resolve({ edges: [] })),
    save: jest.fn(() => Promise.resolve()),
};