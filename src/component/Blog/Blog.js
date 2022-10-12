import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>1.What is the purpose of react router?</h1>
            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works.</p>
            <h1>2.How does context api work</h1>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.</p>
            <h1>3.What is the useRef hook?</h1>
            <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.The useRef Hook can also be used to keep track of previous state values.

This is because we are able to persist useRef values between renders.</p>
        </div>
    );
};

export default Blog;