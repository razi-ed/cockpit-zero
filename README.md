# Cockpit0 - React TypeScript Next

A cutting-edge Next.js project using TypeScript, featuring server-side rendering (SSR) and server components for enhanced performance. The project is architected with modularity in mind, utilizing parallel routes and slots to maximize scalability and code colocation for maintainability. It also includes caching mechanisms, is fully production-ready, and is equipped with robust testing capabilities.

## Features

- **Fully Typed with TypeScript**: The entire codebase is strictly typed for early error detection and better maintainability.
- **Responsiveness**: Ensures the application works well on various screen sizes and devices.
- **Atomic Design Principles**: UI components are built using atomic design principles for consistency and reusability.
- **Modular Structure**: The app is divided into clear modules, making it easier to manage and scale.
- **Mise en Place File Structure**: Files that change together are grouped together for better organization.
- **Edge Cases Handling**: Simple handling of edge cases like loading states, empty states, and 404 (not-found).
- **Caching**: Uses react's caching at the data layer improve performance and reduce unnecessary API requests.
- **Linting and Formatting**: Enforces consistent code style with automated linting and formatting.
- **Conventional Commits**: Follows a standard commit message format to maintain a clean and trackable history.

## Live on Vercel

- The project is now live on Vercel and can be accessed at [[CockPit0](https://cockpit-zero.vercel.app/log-events)]

## Future improvements

- **Virtualized list**: To optimize performance by rendering only the visible portion of large datasets, reducing memory usage, and ensuring smooth user experiences
- **dvanced Filtering and Sorting**: Add features to filter logs by severity, time range, or specific attributes, and implement a search and sorting functionalities.
- **Enhanced Visualization**: Implement more interactive controls, such as the ability to zoom in on specific time ranges directly within the histogram
- **Real-Time Updates**: Incorporate WebSockets or Server-Sent Events (SSE) for real-time log updates without requiring page refreshes.

## Getting Started

### Prerequisites

Kindly ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/)) installed.

### Installation

Clone the project git repository.

Clone repo from the git-repo-bundle (.bundle file), by

Change directory

```bash
cd <destination-directory>
```

Install the dependencies:

```bash
npm i
```

Or using Yarn:

```bash
yarn
```

### Dev mode

Running the Development Server
Using npm:

```bash
npm run dev
```

Or using Yarn:

```bash
yarn dev
```

Open in browser

```bash
http://localhost:3000
```

### Running Tests

For functional/unit testing with Jest and Testing Library:

Using npm:

```bash
npm run test
```

Or using Yarn:

```bash
yarn test
```
