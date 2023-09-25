# React Card App README

This is a simple React application that demonstrates how to use components and pass data using props. The app consists of two main files: `App.js` and `Card.js`. Below, you'll find an overview of the functionality provided by these files along with code comments.

## App.js

### Overview

`App.js` is the main entry point for the React application. It renders a single `Card` component and passes some data to it using props.

### Component Usage

In this file, we create an array `arr` and an object `obj` to represent some data. We then render the `Card` component and pass the following props:

- `name`: "yoyo"
- `age`: "24"
- `arr`: The `arr` array
- `obj`: The `obj` object

### Important Notes

1. **Props Usage**: The code comments explain how props work in React. Props are passed to components and can be accessed using the `props` parameter in the component function. In this example, we also demonstrate that you can directly dereference props, e.g., `props.name` can be accessed as `name`.

2. **Data Passing**: The comments also note that you cannot directly pass arrays or objects as props. Instead, you should declare them outside the HTML and include them as evaluated expressions.

## Card.js

### Overview

`Card.js` defines the `Card` component, which is used by `App.js` to display card information. It accepts props for `username`, `age`, `arr`, and `obj` and displays this information in a card format.

### Default Props

The component sets default values for `username` and `age` in case they are not provided as props.

### Card Display

The component displays the following information:

- An image.
- Username and age.
- A brief description.
- A "Read" button.

### Important Notes

The code comments in this file mainly explain how to access props and use destructuring to directly access `username`, `age`, `arr`, and `obj`. They also provide an example of how to log the values of `arr` and `obj` to the console.

This README provides an overview of the React application's structure and usage of props in the `App` and `Card` components. For a deeper understanding of the code and its execution, refer to the code comments in the respective files.
