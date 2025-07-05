
//!Event Delegation for Performance Optimization & Event Bubbling



//?Event Bubbling in JavaScript

// - event flows from its target element to its parent

// ● Events in JavaScript propagate from child to parent(bottom to top).
// ● When an event is triggered on a child element, it bubbles up through its ancestors unless stopped.
// ● This allows parent elements to listen for events fired on their descendant elements.
// ● Example: Clicking a button inside a < div > can also trigger a click event on the < div >.


//? Event Delegation

// - parent elements handles child events efficiently

// ● Technique where a parent element handles events for its child elements.
// ● Useful when:
    // ○ You have many child elements.
    // ○ Elements are dynamically added or removed.
// ● Instead of attaching event listeners to each child, attach one listener to the parent.
// ● Use event.target to determine which child triggered the event.
// ● Improves performance and maintainability.

// Source of Docs - https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events

console.log("start")

document.getElementById("grandParents").addEventListener("click", () => {
    console.log("grandParent Clicked")
})

document.getElementById("Parents").addEventListener("click", () => {
    console.log("Parents Clicked")
})

document.getElementById("Child").addEventListener("click", () => {
    console.log("Child Clicked")
})

//-here when we click on child and parent and grandparent also occur the event .thats called the event Bubbling
//from target to its parent .here child to grandparent

const menu = document.getElementById("menu");

menu.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {

        console.log("Clicked", e.target.textContent);
    }
})

//interviewer can ask that apply event on all the 15-20 elements .so u can apply on parent we can get output in all child