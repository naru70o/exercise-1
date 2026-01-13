# React Homework: Component Refactoring and Props Usage

## Objectives

Refactor the existing static code into a clean, reusable architecture using React components and props.

## Tasks

### 1. Project Organization & Component Separation

- [ ] Create a new directory named `components` inside your `src` folder.
- [ ] Extract the `AnimalCard` logic into its own dedicated file (e.g., `AnimalCard.jsx`) within the `components` folder.
- [ ] Properly export the component and import it back into your main `App.jsx` to ensure a clean codebase.

### 2. Converting to a Reusable Component (Props)

- [ ] Update the `AnimalCard` component to accept **Props**.
- [ ] The component should be dynamic and accept properties for:
  - `name` (Animal's name)
  - `image` (URL to the animal's image)
  - `info` (Detailed description)

### 3. Implementing Multiple Instances

- [ ] In your `App.jsx`, render a minimum of **three (3)** `AnimalCard` components.
- [ ] Each instance must pass unique data through props to display information for different animals.
- [ ] Ensure the layout displays all cards correctly (the container should already handle the grid layout).
