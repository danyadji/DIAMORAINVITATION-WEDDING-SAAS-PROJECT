---
description: How to run the digital invitation platform (backend + frontend)
---

# Running the Digital Invitation Platform

This project has a mono-repo structure with separate backend (Laravel) and frontend (React) applications.

## Prerequisites

- PHP 8.2+ with Composer
- Node.js 20+ with npm
- SQLite (default) or MySQL

## Step 1: Start the Backend (Laravel API)

Open a terminal and run:

```bash
cd backend
php artisan serve
```

The backend API will be available at: **http://localhost:8000**

## Step 2: Start the Frontend (React + Vite)

Open another terminal and run:

```bash
cd frontend
npm run dev
```

The frontend will be available at: **http://localhost:5173**

## Step 3: Access the Application

Open your browser and go to: **http://localhost:5173**

## Testing the Magic Link Login

1. Go to **http://localhost:5173/login**
2. Enter any email address
3. The API will return a `debug_link` in the response (check browser DevTools Network tab)
4. Copy the magic link and open it in a new tab to complete login

> **Note:** In production, the magic link will be sent via email instead of returned in the API response.

## Troubleshooting

### CORS Errors
Make sure the backend is running on port 8000 and frontend on port 5173. The CORS configuration is set up for these ports.

### Database Errors
Run migrations if needed:
```bash
cd backend
php artisan migrate
```

### Clear Cache
If you encounter config issues:
```bash
cd backend
php artisan config:clear
php artisan cache:clear
```
