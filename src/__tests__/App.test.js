import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

// Your tests here
test('displays a top-level heading with the text `Hi, I\'m _______`"', () => {
    render(<App />)
    const topLevelHeading = screen.getByRole('heading', {
        name: /hi, i'm/i,
        exact: false,
        level: 1, 
    })

    expect(topLevelHeading).toBeInTheDocument()
})

test('displays an image with an alt text identifying the content of the image', () => {
    render(<App/>)
    const image= screen.getByAltText('profile picture')
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/350')
})

test('displays a second-level heading with the text `About Me`', () => {
    render(<App />) 
    const secondLevelHeading= screen.getByRole('heading', {
        name: /about me/i,
        exact: true,
        level: 2,
    })
    expect(secondLevelHeading).toBeInTheDocument()
})

test('displays a paragraph for the biography', () => {
    render(<App />)
    const biography = screen.getByText(/lorem ipsum/i)
    expect(biography).toBeInTheDocument()
})

test('displays links to GitHub and LinkedIn pages', () => {
    render(<App />) 
    const github = screen.getByRole('link', {
        name: /github/i,
        exact: true,
    })
    const linkedIn = screen.getByRole('link', {
        name: /linkedIn/i,
        exact: true,
    })
    expect(github).toHaveAttribute('href', expect.stringContaining('github.com'))
    expect(linkedIn).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
})