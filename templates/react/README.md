# React + Vite + Tailwind CSS + ShadCN UI Template

A modern React application with Vite, Tailwind CSS, and ShadCN UI components, created with [DevKart-FT](https://github.com/dev-kart/devkart-ft).

## ✨ What's Included

- ⚡ **React 18** with Vite for fast development
- 🎨 **Tailwind CSS** for styling
- 🧩 **ShadCN UI** components
- 🌙 **Dark/Light theme** support
- 📱 **Responsive design** helpers
- 🔧 **TypeScript** configured
- 📦 **Essential utilities** and hooks

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and add your environment variables.

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**

   Navigate to [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```text
src/
├── components/          # React components
│   ├── ui/             # ShadCN UI components
│   └── ...             # Custom components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── constants/          # App constants
├── types/              # TypeScript types
├── App.tsx             # Main App component
└── main.tsx            # App entry point
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Adding New Components

```bash
npx shadcn add [component-name]
```

### Theme Configuration

Edit `tailwind.config.ts` to customize colors, fonts, and other design tokens.

## 📖 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [ShadCN UI](https://ui.shadcn.com)

---

Built with ❤️ using [DevKart-FT](https://github.com/dev-kart/devkart-ft)
