// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HederaHash title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HederaHash/i);
    expect(titleElement).toBeInTheDocument();
});
