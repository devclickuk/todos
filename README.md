# React Todo App with Redux Toolkit

### This is a demo project made by Dave Amison for the purpose of demonstrating the use of Redux Toolkit to manage state in a React app.

This is a simple React Todo app built using Redux and Redux Toolkit. It allows you to add, delete, and toggle the completion status of tasks. The state management is handled efficiently using Redux Toolkit's `createSlice` feature.

## Demo

You can view a live demo of this project here: [https://devclickuk.github.io/todos](https://devclickuk.github.io/todos)

## Features

- Add new tasks
- Delete tasks
- Toggle task completion
- Tasks are persisted to local storage
- Tasks are displayed by completion status
- Tasks Remember there order on toggle of completion status

## Technologies Used

- React
- Redux
- Redux Toolkit
- uuid V4 (for generating unique IDs)
- redux-persist (for persisting the Redux store to local storage)

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone https://github.com/devclickuk/todos
```


2. Navigate to the project directory.

```bash
cd todos
```

3. Install the project dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure
The key files and directories in this project include:

src/ - Contains the main source code for the React app & css files.
src/redux/ - Contains the Redux store, reducers, and actions.

## Redux Toolkit Slice
The Redux Toolkit slice (src/redux/slices.taskSlice) defines the actions and reducers for managing the tasks. Here's how it works:

addTask - Adds a new task to the list.
deleteTask - Deletes a task by its ID.
toggleTask - Toggles the completion status of a task.

## License
This project is licensed under the MIT License.