# Components and Props in React with TypeScript

## Understanding Components

Components are the building blocks of React applications. With TypeScript, we get additional type safety and better IDE support.

## Types of Components

### 1. Simple Components

The most basic type of component with TypeScript:

```tsx
const Welcome: React.FC = () => {
  return <h1>Welcome to our App!</h1>;
};
```

### 2. Components with Props

Components that accept typed props:

```tsx
interface GreetingProps {
  name: string;
  role: string;
  isOnline?: boolean; // Optional prop
}

const Greeting: React.FC<GreetingProps> = ({
  name,
  role,
  isOnline = false,
}) => {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <p>Role: {role}</p>
      <span>Status: {isOnline ? "🟢 Online" : "⚫ Offline"}</span>
    </div>
  );
};

// Using the component:
<Greeting name="John" role="Developer" isOnline={true} />;
```

### 3. Components with Children

Components that can wrap other content, with proper typing:

```tsx
interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
};

// Using the component:
<Card title="Important Message">
  <p>This is the content inside the card.</p>
  <button>Click me!</button>
</Card>;
```

## Props

### What are Props?

- Props (properties) are how we pass data to components
- TypeScript ensures type safety for props
- Props are read-only (TypeScript enforces this)
- Props can be any type of data with proper type definitions

### Using Props

#### 1. Basic Props with TypeScript

```tsx
interface UserProfileProps {
  username: string;
  email: string;
  age: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, email, age }) => {
  return (
    <div>
      <h2>{username}</h2>
      <p>{email}</p>
      <span>Age: {age}</span>
    </div>
  );
};

// Usage:
<UserProfile username="johndoe" email="john@example.com" age={25} />;
```

#### 2. Default Props

```tsx
interface ButtonProps {
  text?: string;
  type?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text = "Click Me",
  type = "primary",
  onClick,
}) => {
  return (
    <button className={`btn-${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

// Usage:
<Button onClick={() => console.log("Clicked")} />; // Uses defaults
<Button text="Submit" type="danger" onClick={() => console.log("Submitted")} />;
```

#### 3. Props with Events

```tsx
interface ClickButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  disabled?: boolean;
}

const ClickButton: React.FC<ClickButtonProps> = ({
  onClick,
  text,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

// Usage:
<ClickButton
  text="Click me!"
  onClick={(e) => console.log("Button clicked!", e)}
/>;
```

## Practical Examples

### 1. Product Card Component

```tsx
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product.id)}
        disabled={!product.inStock}
      >
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

// Usage:
const product: Product = {
  id: 1,
  name: "Cool Gadget",
  description: "A very cool gadget",
  price: 99.99,
  image: "gadget.jpg",
  inStock: true,
};

<ProductCard
  product={product}
  onAddToCart={(id) => console.log(`Added product ${id} to cart`)}
/>;
```

### 2. Generic List Component

```tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage:
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build App", completed: true },
];

<List<Todo>
  items={todos}
  renderItem={(todo) => (
    <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
    </span>
  )}
  keyExtractor={(todo) => todo.id}
/>;
```

## Best Practices

1. Always define prop interfaces
2. Use strict type checking
3. Leverage union types for variants
4. Use proper event types
5. Document complex props with JSDoc
6. Use generics for reusable components
7. Keep prop interfaces focused and single-purpose
8. Use discriminated unions for complex prop shapes
9. Avoid using 'any' type
10. Use type inference when possible
