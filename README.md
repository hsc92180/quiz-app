# Quiz App

This is a simple quiz application built using React and React Hooks. The application allows users to answer multiple-choice questions, shows the correct answer after a brief pause, and displays the user's score at the end along with a list of incorrectly answered questions and their correct answers.

## Features

- Scrambles the order of questions on reset
- Pauses for 2 seconds to show the correct answer after an option is clicked
- Displays a list of wrong questions with the correct answers at the end
- Current score increments on each correct answer and remains the same for incorrect answers

## Demo

Check out the live demo [here](https://quiz-app-nine-blond.vercel.app/).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js and npm installed on your machine
- Basic knowledge of React

### Installation

1. Clone the repository:

```sh
git clone https://github.com/hsc92180/quiz-app.git
```

2. Navigate to the project directory:

```sh
cd quiz-app
```

3. Install the dependencies:

```sh
npm install
```

### Running the Application

To start the application, run:

```sh
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `src/components/Quiz.js`: Main quiz component containing the quiz logic and rendering.
- `src/components/Quiz.css`: CSS styles for the quiz component.
- `src/assets/questions.json`: JSON file containing the list of questions.
- `src/App.js`: Entry point of the application, rendering the `Quiz` component.

## Usage

1. Open the application in your browser.
2. Answer the questions by clicking on the options.
3. After selecting an option, the correct answer will be shown after a 2-second pause.
4. At the end of the quiz, your score and a list of questions you answered incorrectly with the correct answers will be displayed.
5. Click the "Reset Quiz" button to restart the quiz with a new set of scrambled questions.

## License

This project is licensed under the MIT License.

## Acknowledgements

- React documentation
- Stack Overflow community