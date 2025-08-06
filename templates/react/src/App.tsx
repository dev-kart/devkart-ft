import { ThemeProvider } from "./components/ThemeProvider";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to React + ShadCN</h1>
          <p className="text-muted-foreground">
            A modern React application with Tailwind CSS and ShadCN UI
          </p>
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
