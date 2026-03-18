# 🎬 A Movie Rating Application

_Go beyond the 5-star scale and analyze the movies you watch._ 🍿

## 📑 Table of Contents

- [About](#-about)
- [How to Use](#-how-to-use)
- [Project Structure](#-project-structure)
- [Technologies](#-technologies)
- [Motivation](#-motivation)
- [Functionality](#-functionality)
- [Installation & Setup](#-installation--setup)
- [Recommended Browsers](#-recommended-browsers)
- [Examples](#️-examples)
- [License](#️-license)
- [Contact](#-contact)

## 📖 About

This app allows you to search, rate, and analyze movies through detailed statistics and visual insights.

The core rating system is built on the premise that a movie's overall "quality" cannot be defined by a single metric. While traditional systems rely on one universal score, this application introduces a **two-dimensional rating plane**. Every movie is evaluated on two distinct axes: **Quality** (objective filmmaking, screenplay, acting) and **Entertainment** (subjective enjoyment, pacing, fun factor).

### 🧐 The Flaw in the 1D Scale (An Example)

Consider the IMDb ratings (as of March 2026). _Harry Potter and the Deathly Hallows: Part 2_ sits at an impressive 8.1 stars.

While it is a great movie, some might argue the screenplay has pacing issues or structural flaws. Yet, it shares the exact same 8.1 rating as films widely considered cinematic masterpieces: _Dead Poets Society_, _Million Dollar Baby_, _Gran Torino_, _Ratatouille_, _Gone Girl_, _Jaws_, or the 11-time Oscar winner _Ben-Hur_.

**Why does it score so highly?** Because it is incredibly fun, nostalgic, and epic—it's the grand finale of a beloved series. When viewers are restricted to a single rating slider, they subconsciously merge their objective critique with their emotional enjoyment.

By introducing a second axis, we separate these aspects. This system does justice to structurally brilliant films without punishing highly entertaining blockbusters, providing a much more accurate reflection of how we actually experience cinema.

## 🕹️ How to Use

1. 🔍 **Search:** Look up a movie by its title (Note: searching by actor or director is not currently supported).
2. ⭐ **Rate:** Add the movies you've seen and score them on the dual-axis system. They will be saved securely to your local browser storage.
3. 📊 **Analyze:** View your personalized movie database and explore the statistics.

You can adjust how your saved films are displayed using the utility bar:

<img src="readme-assets/Screenshot 2026-03-18 at 21.49.31.png" alt="utility bar" width="600" />

**🎨 Layouts:**

- **Default:** A standard grid view.
- **List:** A compact view, ideal for quickly scanning large libraries.
- **Graph:** Displays your movies plotted on the 2D Quality vs. Entertainment plane.

**🗂️ Sorting Options:**

- **Invert:** Toggles between ascending and descending order.
- **Quality:** Sorts strictly by the objective quality axis.
- **Entertainment:** Sorts strictly by the subjective entertainment axis.
- **Combined:** Uses the geometric mean formula, $ \sqrt{quality \times entertainment} $, to calculate a balanced overall score.
- **Difference:** Calculates the oscillation between your personal rating and the TMDB global average.

## 🏗️ Project Structure

```text
MOVIE-RATING/
├── readme-assets/         # Images and assets for this README
└── src/
    ├── backend/           # Node.js backend (API Proxy)
    │   ├── .env           # TMDB API key (must be created manually)
    │   ├── helpers.ts     # Backend utility functions
    │   ├── index.ts       # Main server entry point
    │   └── package.json
    └── frontend/          # React + Vite frontend application
        ├── public/
        ├── src/
        │   ├── assets/        # Static images and icons
        │   ├── components/    # Reusable React UI components (Header, Aside, etc.)
        │   ├── context/       # React Context providers for global state
        │   ├── App.tsx        # Main application component and view manager
        │   ├── database.ts    # IndexedDB initialization and local storage logic
        │   ├── main.tsx       # React DOM rendering entry point
        │   ├── types.tsx      # TypeScript interfaces and type definitions
        │   └── utils.tsx      # Frontend utility functions
        ├── index.html         # Vite HTML entry point
        ├── package.json
        └── vite.config.ts     # Vite bundler configuration

```

## 💻 Technologies

- ⚛️ **React.js**
- 🗄️ **IndexedDB**
- 🟢 **Node.js**

## 💡 Motivation

I built this to implement my theory regarding the imperfections of normalized, 1D rating systems found in movies, video games, and media.

This is also my first React project, designed for educational purposes to deeply explore the framework, state management, and browser storage APIs.

## ✨ Functionality

**🧠 Core Rating Engine**

- **Dual-Axis Rating:** Rate movies on two distinct metrics (Quality and Entertainment) to calculate a more nuanced, mathematical "Combined" score.
- **Global Comparison:** Automatically fetches the average global TMDB rating and calculates the exact numerical oscillation (difference) between your opinion and the public consensus.

**💾 Search & Data Management**

- **Smart Search Integration:** Queries the TMDB API, actively filtering out obscure results (under 500 votes) and sorting by vote count to deliver highly relevant movies.
- **Local Device Storage:** Saves your entire movie library directly to your browser using IndexedDB for lightning-fast, offline-capable access.
- **Data Portability:** Export your entire database as a `.json` backup file, or import an existing file to instantly restore your library across different browsers.
- **Demo Mode:** Includes a pre-populated test `.json` file, allowing users to explore the app's analytics without needing to register for their own TMDB API key.

**👁️ User Interface & Visualization**

- **Dynamic Layouts:** Toggle seamlessly between a standard Grid view, a highly compact List view for quick scanning, and a 2D Graph plot for visual data analysis.
- **Advanced Sorting:** Organize your homescreen by descending/ascending order, specific axes (Quality vs. Entertainment), or by the highest mathematical discrepancy from the global average.

## 🚀 Installation & Setup

To run this project locally, you will need two separate terminal windows to run the frontend and backend simultaneously.

### 1️⃣ Backend Setup & API Key

The backend handles the secure requests to the TMDB API.

1. Open a terminal and navigate to the backend directory:

   ```bash
   cd src/backend
   ```

2. You must acquire a free API key from TMDB. Create a file named .env inside the src/backend folder and store your key like this:

```bash
TMDB_API_KEY=your_api_key_here
```

3. Start the backend development server:

```bash
npm run dev
```

### 2️⃣ Frontend Setup

Leave the backend running and open a second, new terminal window.

1. Navigate to the frontend directory:

```bash
cd src/frontend
```

2. Start the React application:

```bash
npm run dev
```

### 3️⃣ Quick Start (Demo Mode)

If you want to test the user interface, graphs, and statistics immediately without searching and rating movies manually, you can use the provided sample data:

- Click the Import button in the app's header and select the included sample .json file to instantly populate your local database.

⚠️ **Important Note on Searching**
When searching for a movie, your queries need to be highly specific.
Because the application filters out irrelevant entries (movies with less than 500 votes) and sorts them after retrieving the initial batch of results from TMDB, a highly generalized search query might cause the most famous movies to be excluded from that very first data pull.

## 🌐 Recommended Browsers

- ✅ Works best on **Safari, Edge, and Chromium-based browsers**.
- ❌ _Currently not fully optimized for Firefox._

## 🖼️ Examples

<p align="center">
  <img src="readme-assets/Screenshot 2026-03-18 at 21.43.33.png" alt="grid" width="700" />
  <img src="readme-assets/Screenshot 2026-03-18 at 22.31.52.png" alt="list" width="700" />
  <img src="readme-assets/Screenshot 2026-03-18 at 21.44.43.png" alt="details" width="700" />
  <img src="readme-assets/Screenshot 2026-03-18 at 21.46.43.png" alt="graph" width="700" />
  <img src="readme-assets/Screenshot 2026-03-18 at 21.45.30.png" alt="grid on mobile" width="400" />
  <img src="readme-assets/Screenshot 2026-03-18 at 21.46.02.png" alt="details on mobile" width="400" />

</p>

## ⚖️ License

This project is open-source and available under the [MIT License](LICENCE).

## 📫 Contact

Created by **[Vilém Učík / wiliams12]** - feel free to contact me or contribute to this repository!
