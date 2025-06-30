# NASA Space Project

This repository contains a small full stack application that displays NASA's Astronomy Picture of the Day (APOD).
The backend provides an API wrapper over the official NASA endpoint and the frontend consumes that API to render the picture and its details.

## Project Structure

- **backend/** – Node.js/Express server that fetches data from the NASA APOD API.
- **frontend/** – React app created with Vite that displays the APOD and lets you pick a date.

The repository uses pnpm workspaces so dependencies are managed from the root `package.json`.



## Getting Started

Run the development servers in separate terminals:


   pnpm dev:backend     # starts the Express API on port 3001 by default
   pnpm dev:frontend    # starts the React dev server on port 5173


   During development the frontend is configured to proxy `/api` requests to the backend.



## Building

Production builds can be created with:

    pnpm build:backend
    pnpm build:frontend


Each command runs the respective workspace build script.