
/*

- use Memo is use for optimization .
- stop re-rendeing or unnecesary component calling to stop so that optimization of app will be happen

//? Question – 1

What is React.memo()?
- React.memo() is used to prevent unnecessary re-renders of a component when its props do not change.
- It’s similar to PureComponent.
- React.memo() boosts performance by skipping re-render if props are the same – great for large UI trees or expensive child components.
- When to use When a component is pure and re-rendering is costly
- In React, PureComponent is used for class components – it only re-renders when there’s an actual change in its props or state.
- For functional components, the same behavior can be achieved using memo().

//? Functional Component
export default React.memo(MyComponent)

//? Class Component
class MyComponent extends React.PureComponent {
   render() {
     return <h2>Hello {this.props.name}</h2>;
   }
 }
 
- A pure component re-renders only when its props or state change.

*/