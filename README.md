# Hamm22 MovieList Website

A modern movie browsing web application built with React and Vite. This project focuses on clean UI design, smooth user experience, and real-time data integration using the TMDB API.

---

## Features

* Live movie search with debounce
* Search dropdown with instant results
* Movie detail page with cinematic layout
* Smooth page transitions using Framer Motion
* Auto-hide navbar interaction
* Responsive and modern UI design

---

## Tech Stack

* React (Vite)
* Tailwind CSS
* Framer Motion
* React Router
* TMDB API

---

## Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── MovieCard.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── Detail.jsx
 │
 ├── services/
 │    └── Api.js
```

---

## Installation

```bash
git clone https://github.com/yourusername/movielist
cd movielist
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_KEY=your_tmdb_api_key
```

You can get the API key from:
https://www.themoviedb.org/

---

## Deployment

This project is ready to be deployed using Vercel or any modern frontend hosting platform.

---

## Preview

<img width="1918" height="895" alt="image" src="https://github.com/user-attachments/assets/2c61efb1-a47a-4af2-9644-50bb7721999a" />


---

## Author

Hamm22

---

## Notes

This project highlights:

* Frontend architecture using React
* API integration
* UI/UX design consistency
* Animation and interaction handling

---

## Future Improvements

* Favorite system
* Trailer modal integration
* Keyboard navigation for search
* Genre filtering
