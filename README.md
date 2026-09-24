# Checkmate

A simple web app that combines task management with a 25-minute timer.

## Live Demo

[Open Checkmate](https://thanushri-mohan.github.io/Checkmate/)

## Features

- Add tasks
- Marks completed tasks with a strike-through + fade
- Delete tasks
- 25-minute study timer
- Start and reset timer controls
-  layout for smaller screens

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## How It Works

### Task Management

Users can enter a task and add it to the task list. JavaScript creates the task element dynamically and adds it to the page.

Clicking a task marks it as completed using a strike-through effect.

Each task also has a Delete button that removes it from the list.

### Study Timer

The timer starts at 25 minutes.

JavaScript uses `setInterval()` to decrease the remaining time every second and updates the timer display.

The Reset button stops the timer and returns it to 25:00.

## Project Structure

```text
Checkmate/
├── README.md
├── index.html
├── style.css
└── script.js
