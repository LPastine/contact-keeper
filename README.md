# contact-keeper

## Creating and implementing a Context workflow example - Auth Context


- 0 - Create the folder "auth" inside the "context" folder
- 00 - Inside of it create the context file ("authConext.js"), the reducer file ("authReducer.js"), and the state file ("AuthState.js")
- 000 - Add the types inside the "types.js"
- 1 - Create the context, initialize it and export it.
- 2 - Import React, the useReducer hook,  the context and the reducer.
- 3 - Import the types
- 4 - Initialize the state
- 5 - Initialize initial state
- 6 - Initialize the reducer in the initial state
- 7 - Create the actions (methods) - At first we comment them, them we write the code.
- 8 - Return the Context Provider
- 9 - Add state values / Any actions that are created will be later added into this section
- 10 - Bring the AuthState to the Appjs
- 11 - Wrap the AuthState as the very first provider

## Creating and implementing a Component workflow example - auth

- 0 - Create the folder "auth" inside the components folder
- 1 - Create the Register component ("Register.js") and the Login component ("Login.js")
- 2 - Setup the Register Form (rafc - react arrow function component)
- 3 - Declare the user state variable. Remember that useState is a Hook that allows you to have state variables in functional components. The only argument to this hook is the initial state. It returns a pair of values: the current state(that we instantiate in the declared state variable "user") and a function that updates it("setUser").
- 4 - Destructure so that we can use these as variables
- 5 - Structure & Style the form
- 6 - Add onChange function in order to add the values to the form
- 7 - Create onSubmit function and add it to the form
- 8 - Import the Register component to the Appjs
- 9 - Create Route for the Register Component 

## Is it the same workflow with the Login Component?
Yes. We just copy pasted the Register code to the Login and adapted it to the needs for the Login page.

## Alert Context, State & Component... same workflow?
