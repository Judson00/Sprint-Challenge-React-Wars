# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JS library for building user interface. It was made by Facebook to create complex, rich user interfaces in such a way that it is unconcerned when and where the data is received. It is used to cut down performance expense in regard to DOM operations, enabling the DOM to update faster. React also uses components to make itself very modular and reusable.

2. What does it mean to think in react?

Think in terms of components and reusability.

3. Describe state.

In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this. state 

4. Describe props.

Props are arguments passed into React components. Props are passed to components via HTML attributes.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A "side effect" is anything that affects something outside the scope of the function being executed. We sync effects by passing in a dependency array as the second argument to the effect hook.