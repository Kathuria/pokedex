import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./pages/home/home.page', () => () => <div>Home Page</div>);
jest.mock('./pages/details/details.page', () => () => <div>Detail Page</div>);

describe('App Component', () => {
  it('renders HomePage on default route', async () => {
    window.history.pushState({}, 'Home Page', '/pokedex/');
    render(<App />);

    // Check if the loading fallback is displayed initially
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Wait for the HomePage component to load
    const homePageElement = await screen.findByText(/Home Page/i);
    expect(homePageElement).toBeInTheDocument();
  });

  it('renders DetailPage on details route', async () => {
    window.history.pushState({}, 'Details Page', '/pokedex/details');

    render(<App />);

    // Check if the loading fallback is displayed initially
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Wait for the DetailPage component to load
    const detailPageElement = await screen.findByText(/Detail Page/i);
    expect(detailPageElement).toBeInTheDocument();
  });
});
