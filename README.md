# Guitar Designer App

Guitar Designer App is a Vite + React application to design electric guitars using SVGs.

## Table of Contents

- [Guitar Designer App](#guitar-designer-app)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Contributing](#contributing)
    - [Commit and PR Message Guidelines](#commit-and-pr-message-guidelines)

## Technologies Used

- Vite
- React
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory
   ```bash
   git clone <repository-url>
   cd guitar-designer
   ```
2. Install the dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Usage

Once your local dev application is running, you can access it via http://localhost:3000.

## Contributing

Contributions are welcome! If you are not a direct contributor, please fork the repository and create a pull request with your changes.

- (If you are not invited) Fork the repository
- Create your feature branch (`git checkout -b feature/YourFeature`)
- Commit your changes (`git commit -m 'feat: add some feature'`)
- Push to the branch (`git push origin feature/YourFeature`)
- Open a pull request

### Commit and PR Message Guidelines

Every commit message should follow the following format:

```
<type>: <subject>
```

Where `<type>` is one of the following:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation
- `ci`: Changes to our CI configuration files and scripts
- `build`: Changes that affect the build system or external dependencies
- `temp`: Temporary commit that won't be included in the final version
- `revert`: Reverts a previous commit
- `merge`: Merge branch
- `release`: Release commit
- `docker`: Docker App Containerization
