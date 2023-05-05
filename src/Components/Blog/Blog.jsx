import React from 'react';

const Blog = () => {
    return (
        <div className='w-[75%] mx-auto'>
            <div className='border rounded-xl shadow-md my-8 p-5'>
                <h1 className='font-bold text-xl my-8'>1. Tell us the differences between uncontrolled and controlled components.</h1>
                <p>In controlled components, the parent component is responsible for managing the state and passing it down as props to the controlled component. This makes it easy to track the state of the component and predict how it will behave. However, in larger projects with many levels of nested components, this can make the code more complex and harder to manage.<br></br>

                    On the other hand, uncontrolled components manage their own state using a ref to access the DOM element's current value and update the state accordingly. This makes them simpler to implement, but they can be more difficult to track and manage in larger projects.</p>
            </div>
            <div className='border rounded-xl shadow-md my-8 p-5'>
                <h1 className='font-bold text-xl my-8'>2. How to validate React props using PropTypes.</h1>
                <p>Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                    We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
                <p>When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.</p>
            </div >
            <div className='border rounded-xl shadow-md my-8 p-5'>
                <h1 className='font-bold text-xl my-8'>3. Tell us the difference between nodejs and express js.</h1>
                <p>To know the difference between ExpressJS vs NodeJS, we must first analyze each separately. NodeJS is open-source, cross-platform JavaScript code that runs on servers. It uses an asynchronous event-driven model and is designed to build scalable network applications. It’s built on Google Chrome’s V8 engine, which makes it fast and efficient to develop apps.</p>
                <p>ExpressJS is a web application framework for NodeJS. That’s what mainly makes the difference between Express JS and Node JS. The former provides various features that make web application development fast and easy, which otherwise takes more time using only the latter. It provides a robust set of features for web and mobile applications.</p>
            </div>
            <div className='border rounded-xl shadow-md my-8 p-5'>
                <h1 className='font-bold text-xl my-8'>4. What is a custom hook, and why will you create a custom hook?</h1>
                <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>

    );
};

export default Blog;