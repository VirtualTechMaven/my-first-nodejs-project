# My First Node.js Project

## Overview
This project, **My First Node.js Project**, is a simple backend application built with Node.js and Express.js.  
It serves as an introduction to creating APIs, handling HTTP requests, and understanding how backend services work.  
The main goal of this application is to return a JSON response that introduces the developer, showcasing basic server setup and routing concepts in Node.js.

This project was developed as part of a backend development learning challenge and demonstrates the foundational understanding of Express.js, routing, JSON formatting, and API response structures.

When you visit `http://localhost:3000/`, the application returns a structured JSON object containing the developer’s name, current role, and a short message about their excitement for backend development.

---

## Objectives
- Understand the basics of setting up a Node.js server.
- Learn to install and use Express.js.
- Create and test a RESTful API endpoint.
- Format and return JSON responses.
- Practice version control with Git and GitHub.

---

## Features
- Built with **Express.js** for efficient server handling.
- Uses **nodemon** for automatic restarts during development.
- Returns a **formatted JSON response**.
- Organized folder structure with separation of concerns (controllers and server setup).
- Simple, clean, and beginner-friendly codebase.

---

## Setup Instructions
Follow these steps to set up and run the project locally.

1. **Clone this repository**
    git clone https://github.com/<your-username>/my-first-nodejs-project.git
2. **Navigate to the project folder**
   cd my-first-nodejs-project
3. **Install project dependencies**
   npm install
4. **Start the server**
   npm start
or, if you are using nodemon, run:
npm run dev
5. **Access the API**
  Open your browser and go to:
http://localhost:3000/

You should see the following JSON response displayed neatly:
{
  "name": "Chioma Princess Ohwo",
  "role": "Backend Developer in Training",
  "message": "Excited to build my first API!"
}

---

## Project Structure
The project follows a clean and organized structure for scalability and readability.

my-first-nodejs-project/
│
├── controllers/
│   └── postController.js          # Handles JSON response logic
│
├── index.js                       # Entry point (connects routes and controllers)
├── server.js                      # Configures and starts the Express server
├── package.json                   # Lists project dependencies and scripts
├── package-lock.json              # Dependency lock file
├── .gitignore                     # Excludes node_modules and unnecessary files
└── README.md                      # Project documentation

---

## Interactions

| Method | Endpoint | Description                          | Example Output                                                                                                             |
| ------ | -------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/`      | Returns an introductory JSON message | `{ "name": "Chioma Princess Ohwo", "role": "Backend Developer in Training", "message": "Excited to build my first API!" }` |

---

## Technologies Used
- Node.js — JavaScript runtime for backend development
- Express.js — Minimal and flexible web framework for building APIs
- Nodemon — Utility for auto-restarting the server during development
- Git & GitHub — Version control and project hosting

---

## Responsive Notes
This is a backend API, not a front-end project.
You can test it using:

- Any web browser by visiting http://localhost:3000/
- API tools such as Postman, Insomnia, or cURL
The server listens on port 3000 by default and can be customized in the server.js file if needed

 ---

 ## Common Commands

 | Command                   | Description                                      |
| ------------------------- | ------------------------------------------------ |
| `npm install`             | Installs all dependencies                        |
| `npm start`               | Runs the project once                            |
| `npm run dev`             | Runs the project with nodemon for live reloading |
| `git add .`               | Adds all files to staging area                   |
| `git commit -m "message"` | Commits changes                                  |
| `git push`                | Pushes updates to GitHub                         |

---

## Troubleshooting

If the server fails to start, make sure port 3000 is not in use.
- You can change the port number in server.js.
- Ensure that Express is installed by running
  npm install express
- To enable automatic server restart, install nodemon globally:
  npm install -g nodemon
If node_modules is too large, confirm it’s ignored in your .gitignore file.

---

## Dependencies
The following dependencies are used in this project:

| Package | Purpose                                             |
| ------- | --------------------------------------------------- |
| express | Used to create and handle routes and HTTP requests  |
| nodemon | Automatically restarts the server when code changes |

**You can install them manually using:**
npm install express
npm install --save-dev nodemon

---

## Commit Summary Table
| Version | Commit Message                           | Description                                      |
| ------- | ---------------------------------------- | ------------------------------------------------ |
| v1.0.0  | initial commit - my first nodejs project | Set up base server and express route             |
| v1.0.1  | add gitignore                            | Added gitignore file to exclude node_modules     |
| v1.0.2  | organize project structure               | Created controller, separated routes and logic   |
| v1.0.3  | improve JSON response formatting         | Added pretty print and content-type headers      |
| v1.0.4  | update readme                            | Added detailed documentation for setup and usage |

---

## Future Improvements
- Add multiple routes for different types of introductions.
- Integrate a database (MongoDB or PostgreSQL).
- Implement environment variables with .env files.
- Deploy the project using Render or Vercel.
- Add test cases using Jest.

---

## Author
Chioma Princess Ohwo
Backend Developer in Training | Full Stack Web Developer | Cloud Architect
Passionate about building scalable digital solutions and simplifying technology for users

---

## License
This project is open-source and free to use for learning and practice purposes.

---

## Made by thevirtualtechmaven — Full Stack Web Developer

 
