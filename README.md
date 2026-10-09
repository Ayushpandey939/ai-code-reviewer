# AI Code Reviewer

An AI-powered code review application built using React, Node.js, Express, and the Google Gemini API. It allows users to submit code and receive AI-generated feedback to help identify issues and improve code quality.

## Preview

![AI Code Reviewer Preview](https://github.com/Ayushpandey939/ai-code-reviewer/blob/main/screenshot/image.png)

*Preview of the AI Code Reviewer application.*

## Features

* **AI-Powered Code Review:** Get automated feedback on submitted code.
* **Code Editor:** Write and edit code directly in the application.
* **Syntax Highlighting:** Improve code readability with syntax highlighting.
* **Markdown Rendering:** Display AI-generated reviews in a readable format.
* **Code Quality Analysis:** Receive suggestions about correctness, readability, performance, and best practices.
* **REST API:** Communicate with the backend through an Express API.

## Tech Stack

### Frontend

* React
* Vite
* JavaScript

### Backend

* Node.js
* Express.js
* Google Gemini API
* dotenv
* CORS

## Project Structure

```text
first-ai/
├── Frontend/
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   │   └── ai.controller.js
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   └── app.js
│   ├── server.js
│   └── .env
│
├── screenshots/
│   └── ai-code-reviewer.png
│
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm
* A Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/Ayushpandey939/ai-code-reviewer.git
cd ai-code-reviewer
```

### 2. Set Up the Backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Replace `your_gemini_api_key` with your actual API key. **Never upload your API key to GitHub.**

Start the backend using the command configured in your backend project. If `server.js` is your entry point and no start script is configured, run:

```bash
node server.js
```

The backend should run at:

```text
http://localhost:3000
```

### 3. Set Up the Frontend

Open a separate terminal and navigate to the frontend directory:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## API Endpoint

### Review Code

**Method:** `POST`

**Endpoint:**

```text
http://localhost:3000/ai/get-review
```

**Request Body:**

```json
{
  "code": "function sum(a, b) { return a + b; }"
}
```

The backend sends the submitted code to the configured Gemini model and returns the generated review.

## How It Works

1. The user enters code into the frontend editor.
2. The user clicks the review button.
3. The frontend sends the code to the backend using Axios.
4. The Express route forwards the request to the controller.
5. The controller calls the AI service.
6. The AI service sends the code to the configured Gemini model.
7. The generated review is returned to the frontend.
8. React Markdown displays the review in a readable format.

## Code Review Guidelines

The AI reviewer is instructed to evaluate code for:

* Correctness and potential bugs
* Security vulnerabilities
* Performance concerns
* Readability and maintainability
* Error handling and edge cases
* Coding standards and best practices

The quality and availability of the generated feedback depend on the configured AI model and API service.

## Future Improvements

* Support for multiple programming languages
* More structured review results with severity levels
* Improved loading and error states
* Review history
* Enhanced code editor experience
* Automated code quality scoring
* Support for larger code submissions

## Limitations

* AI-generated feedback may not always be correct.
* The application requires a working Gemini API configuration.
* API usage may be subject to rate limits and service availability.
* AI suggestions should be reviewed and tested before implementation.

## Author

**Ayush Pandey**

GitHub: [Ayushpandey939](https://github.com/Ayushpandey939)

## License

No license has been specified for this project yet.
