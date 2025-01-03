// Import the necessary module for extending Jest's assertions
import '@testing-library/jest-dom';

// Define a global fetch mock using Jest
global.fetch = jest.fn(
  (): Promise<Response> =>
    Promise.resolve({
      json: () => Promise.resolve({ results: [{ a: 'dummy' }] }),
    } as Response)
);
