# Internship Project

This project consists of two main components: a React app for the frontend and a Django app for the backend (product).

## Prerequisites

Before running the project, ensure you have the following dependencies installed on your system:

- **Node.js and npm (or yarn):** These are essential for managing JavaScript dependencies in the React app. You can download them from the official Node.js website (https://nodejs.org/en/about/previous-releases).

## Project Structure

The project is organized into the following folders:

- **frontend:** This folder contains the React app's codebase.
- **product:** This folder houses the Django app's codebase and backend logic.

## Running the Project

### 1. Start the Django Backend (product):

1. Navigate to the `product` directory in your terminal:

   ```bash
   cd product

2. Create a virtual environment to isolate project dependencies (recommended):

   ```bash
    python -m venv env
    source env/bin/activate  # Linux/macOS
    env\Scripts\activate.bat  # Windows

3. Install the required dependencies for the Django backend:

   ```bash
   pip install -r requirements.txt
   
4. Apply database migrations (if applicable):

   ```bash
   python manage.py migrate

5. (Optional) Create a superuser account for Django admin:

   ```bash
   python manage.py createsuperuser

6. Start the Django development server:

   ```bash
   python manage.py runserver


### 2. Start the React Frontend (frontend):

1. Navigate to the frontend directory in your terminal:

   ```bash
   cd frontend

2. Install the required dependencies for the React app:

   ```bash
   npm install  # or yarn install

3. Start the React development server:

   ```bash
   npm start  # or yarn start


This will typically start the server on a port specified in your React app's configuration (usually http://localhost:3000/).