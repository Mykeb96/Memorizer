# 🧠 Memorizer - Memory Card Game

A modern, responsive memory card game built with React, TypeScript, and SCSS. Test your memory skills by matching pairs of colored cards in this beautifully designed web application.

## ✨ Features

- **🎯 Classic Memory Gameplay**: Match pairs of colored cards to win
- **🔧 TypeScript**: Fully typed for better development experience
- **🎮 Interactive Feedback**: Visual feedback for matches and mistakes
- **🏆 Victory Screen**: Celebrate your win with a dedicated victory screen

## 🎮 How to Play

1. **Start the Game**: Click "Play Again" to begin a new game
2. **Flip Cards**: Click on any card to reveal its color
3. **Find Matches**: Click on a second card to see if it matches the first
4. **Match Pairs**: If the colors match, the cards disappear
5. **Try Again**: If they don't match, the cards flip back after 1 second
6. **Win**: Match all 8 pairs to win the game!

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/memorizer.git
   cd memorizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to play the game!

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/
│   └── Card.tsx              # Individual card component
├── styles/
│   ├── App.module.scss       # Main app styles
│   ├── components/
│   │   └── Card.module.scss  # Card-specific styles
│   └── index.css            # Global styles
├── App.tsx                   # Main application component
└── main.tsx                  # Application entry point
```

## 🎨 Design Features

### Card States
- **Hidden**: Cards start face-down (transparent background)
- **Active**: Selected cards show their color
- **Matched**: Successfully matched cards become invisible
- **Mistake**: Non-matching cards flip back after 1 second

## 🔧 Technical Implementation

### State Management
- **Card State**: Each card tracks `isActive` and `isMatched` properties
- **Game State**: Tracks selected cards and game completion
- **Performance**: Uses React.memo for optimized re-rendering

### Key Features
- **UUID Generation**: Uses `crypto.randomUUID()` for unique card IDs
- **Partner Matching**: Cards are linked by `partnerId` for accurate matching
- **Shuffle Algorithm**: Randomizes card positions on each game
- **TypeScript**: Full type safety with custom interfaces

### Performance Optimizations
- **Memoized Components**: Cards only re-render when necessary
- **Efficient State Updates**: Only updates specific cards, not entire array

## 🎯 Game Logic

1. **Deck Creation**: Generates 16 cards (8 pairs) with unique IDs
2. **Shuffling**: Randomizes card positions using Fisher-Yates algorithm
3. **Selection**: Tracks up to 2 selected cards at a time
4. **Matching**: Compares cards using `partnerId` relationship
5. **Completion**: Detects when all cards are matched

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [SCSS](https://sass-lang.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Type-checked with [TypeScript](https://www.typescriptlang.org/)

⭐ **Star this repository if you found it helpful!**
