# Introduction to React with TypeScript

## What is React?

React is a JavaScript library for building user interfaces. We're using it with TypeScript for added type safety and better developer experience.

## Why React with TypeScript?

- Makes it easy to build interactive web applications
- Breaks down complex UIs into simple pieces called components
- Automatically updates the screen when data changes
- TypeScript adds static typing for better code quality
- Excellent IDE support and autocompletion
- Catches errors before runtime

## Key Concepts

### 1. Components

Components are like LEGO blocks for your website. In TypeScript, we define them with proper types:

```tsx
interface WelcomeProps {
  name?: string; // Optional prop
}

function Welcome({ name = "Associate" }: WelcomeProps) {
  return <h1>Hello, {name}!</h1>;
}
```

### 2. JSX/TSX

JSX/TSX is like HTML, but you can write it directly in your TypeScript code:

```tsx
const element: JSX.Element = <h1>Welcome to React</h1>;

// With type safety:
const name: string = "Associate";
const element: JSX.Element = <h1>Hello, {name}!</h1>;
```

### 3. Props

Props are how we pass data to components, now with type safety:

```tsx
interface GreetingProps {
  name: string;
  role?: string; // Optional prop
}

function Greeting({ name, role = "Associate" }: GreetingProps) {
  return (
    <h1>
      Hello, {name}! Role: {role}
    </h1>
  );
}

// Using the component:
<Greeting name="John" />; // TypeScript will ensure name is provided
```

### 4. State

State is data that can change over time, with type safety:

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0); // Explicitly typed state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Getting Started

To create a new React project with TypeScript:

```bash
# Create new project with TypeScript template
npx create-react-app my-app --template typescript

# Install additional dependencies
cd my-app
npm install axios @types/node @types/react @types/react-dom @types/jest

# Start the development server
npm start
```

## Project Structure

```
src/
  components/     # React components
  types/         # TypeScript interfaces and types
  services/      # API services using axios
  hooks/         # Custom React hooks
  utils/         # Utility functions
  assets/        # Images, styles, etc.
```

## Best Practices for Beginners

1. Always define prop types using interfaces
2. Use functional components with proper type definitions
3. Keep components small and focused
4. Use meaningful names for components, props, and types
5. Leverage TypeScript's type inference when possible
6. Add JSDoc comments for complex props or functions
7. Use proper type imports/exports

## Example with Axios and TypeScript

```tsx
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>("/api/user");
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch user");
      }
    };

    fetchUser();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```
