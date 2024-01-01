### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
- React is a front-end framework. You would use it when making interactive websites that require a lot of smaller working parts. 

- What is Babel?
- Babel is a library that translates code from one language to another, or to one version of a language to another of the same. Used by React to translate JSX.

- What is JSX?
- JSX is short for JavaScript XML and is basically a shorthand way of writing html in javascript.

- How is a Component created in React?
- You can create it as function that returns JSX or as a class.

- What are some difference between state and props?
- Props are passed in as "arguments" to a functional component from a parent component and they cannot be changed. State is data that can be changed within a component and any change to it causes a rerender of the entire component.

- What does "downward data flow" refer to in React?
- It means that generally there should be 'smarter' elements in the higher levels that control the state or make requests for data, and then they pass it down to smaller components to be rendered.

- What is a controlled component?
- Usually a form input who's data entry is controlled by changes to the state. So React is always aware of what the form values are.

- What is an uncontrolled component?
- An uncontrolled component is one that react does not control its data entry. i.e. File upload inputs.

- What is the purpose of the `key` prop when rendering a list of components?
- The purpose is that there is unique identifier for each component so that React can reference it and keep track of it across state changes and rerenders.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
- It is a poor choice, because arrays are mutable, and if a list of components is changes, it's index might change which will give it a different key. They should be consistent across rerenders and state changes.

- Describe useEffect.  What use cases is it used for in React components?
- useEffect, is a function that allows you to run a piece of code when certain things happen (on first render, or when a piece of state changes). It is useful if you don't want something to run every single time it rerenders. A use case would be to make an axios call on the first render, but not any subsequent ones.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
- It returns an object with key of current that references something on the DOM. Changes to it don't trigger a rerender.

- When would you use a ref? When wouldn't you use one?
- You would use it to control an html element that React cant directly manipulate or to set-up or clean up timers.

- What is a custom hook in React? When would you want to write one?
- A custom hook is essentially a function that you write to abstract code from your components. It would be used if you are using the same logic in different components, such as making axios calls.
