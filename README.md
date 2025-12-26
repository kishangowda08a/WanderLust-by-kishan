# WanderLust-by-kishan
MERN Full stack webdevelopment project
🌍 WanderLust – Full-Stack Travel & Homestay Web App

WanderLust is a production-ready Airbnb-inspired travel and homestay platform that allows users to explore, list, and review accommodations across different locations. The application is built using Node.js, Express.js, MongoDB, and EJS, following MVC architecture and real-world backend practices.

Users can securely sign up and log in, create property listings with images, view locations on an interactive map, and leave ratings and reviews — all deployed live with cloud services.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
✨ Key Features

🔐 User Authentication & Authorization

Secure signup, login, and logout using Passport.js

Authorization checks for listing owners and review authors

🏠 Property Listings

Create, edit, and delete listings

Upload images using Cloudinary + Multer

Price formatting and location details

⭐ Reviews & Ratings

Star-based review system

Only review authors can delete their reviews

Automatic cleanup of reviews when a listing is deleted

🗺️ Map Integration

Interactive maps using Mapbox

GeoJSON-based location storage

Visual location markers for each listing

🔎 Category-Based Browsing

Filter listings by categories like Rooms, Mountains, Pools, Farms, Castles, etc.

⚙️ Robust Backend

Custom middleware for authentication, authorization, and validation


Centralized error handling and flash messages

MongoDB Atlas cloud database
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🛠️ Tech Stack

Frontend: EJS, Bootstrap, CSS

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: Passport.js

Cloud Services: Cloudinary, Mapbox

Deployment: Render, MongoDB Atlas
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📂 WanderLust – Project Folder Flowchart
WanderLust-by-kishan/
│
├── app.js                     # Main application entry point
│
├── controllers/               # Business logic (MVC - Controller)
│   ├── listing.js             # Listing-related logic
│   ├── review.js              # Review-related logic
│   └── user.js                # Authentication & user logic
│
├── models/                    # Database schemas (MVC - Model)
│   ├── listing.js             # Listing schema
│   ├── review.js              # Review schema
│   └── user.js                # User schema (Passport)
│
├── routes/                    # Application routes
│   ├── listing.js             # /listings routes
│   ├── review.js              # /reviews routes
│   └── user.js                # /login, /signup routes
│
├── views/                     # UI templates (MVC - View)
│   │
│   ├── layouts/               # Common layout (boilerplate)
│   │   └── boilerplate.ejs
│   │
│   ├── includes/              # Reusable UI components
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── listings/              # Listing-related pages
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   │
│   └── users/                 # Authentication pages
│       ├── login.ejs
│       └── signup.ejs
│
├── public/                    # Static assets
│   ├── css/                   # Stylesheets
│   └── js/                    # Client-side JS
│
├── utils/                     # Helper utilities
│   ├── ExpressError.js        # Custom error class
│   └── wrapAsync.js           # Async error handler
│
├── init/                      # Database seeding scripts
│   └── data.js
│
├── cloudConfig.js             # Cloudinary configuration
├── schema.js                  # Joi validation schemas
├── middleware.js              # Auth & authorization middleware
│
├── .gitignore
├── package.json
└── README.md
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🚀 Live Demo

🔗 Live Application:
https://wanderlust-project-hjro.onrender.com

💻 Source Code:
https://github.com/kishangowda08a/WanderLust-by-kishan
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📌 What I Learned

Building scalable RESTful routes

Implementing authentication & authorization flows

Managing cloud-based image uploads

Handling relational data with Mongoose

Deploying full-stack apps to production
