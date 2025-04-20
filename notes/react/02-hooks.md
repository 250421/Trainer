# React Hooks with TypeScript

## What are Hooks?

Hooks are special functions that let you use React features in your components. In TypeScript, we can add type safety to our hooks.

## Most Common Hooks

### 1. useState

The useState hook with proper typing:

```tsx
import { useState } from "react";

interface User {
  name: string;
  email: string;
}

function NameInput() {
  const [name, setName] = useState<string>(""); // Type annotation
  const [user, setUser] = useState<User | null>(null); // Union type

  return (
    <div>
      <input
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
```

### 2. useEffect

The useEffect hook with Axios and TypeScript:

```tsx
import { useState, useEffect } from "react";
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
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || "Failed to fetch user");
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchUser();
  }, []); // Empty array means run only once

  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Loading...</div>;

  return <div>Welcome, {user.name}!</div>;
}
```

### 3. useRef

The useRef hook with TypeScript:

```tsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    // Optional chaining because ref.current might be null
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

## Rules of Hooks

1. Only call hooks at the top level of your component
2. Only call hooks in React function components or custom hooks
3. Hooks can't be used in regular functions
4. Hook names must start with "use"
5. Properly type your hooks and their dependencies

## Common Use Cases

### Managing Forms with TypeScript

```tsx
interface FormData {
  email: string;
  password: string;
}

function SimpleForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post<{ success: boolean }>("/api/login", formData);
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Form submission failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Loading Data with Axios

```tsx
interface Product {
  id: number;
  name: string;
  price: number;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("/api/products");
        setProducts(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || "Failed to fetch products");
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}
```

## Tips for Using Hooks with TypeScript

1. Always provide proper type annotations for state and refs
2. Use interface or type for complex state shapes
3. Properly type event handlers
4. Use type inference when possible
5. Create custom hooks with proper TypeScript definitions
6. Handle API responses and errors with proper typing
7. Use discriminated unions for complex state management
