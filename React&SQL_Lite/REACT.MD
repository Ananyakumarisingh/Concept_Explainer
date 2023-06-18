
## Pre class 2.1
<a href="https://peerabduljabbar.notion.site/PRE-CLASS-NOTES-STUDENTS-9dae6686f92d48d6887d59a54dd65b38">Presentation and Pre Class Assignments</a>


## Pre class 2..2
__React Events ( Synthetic Events )__
<a href="https://reactjs.org/docs/events.html">SyntheticEvent</a>


## __useState__

`const [state, setState] = useState(initialState)`

## __Usage__

__Adding state to a component__

Call useState at the top level of your component to declare one or more state variables.

    import { useState } from 'react';

    function MyComponent() {
        const [age, setAge] = useState(42);
        const [name, setName] = useState('Taylor');
        // ...
    The convention is to name state variables like [something, setSomething] using array destructuring.
useState returns an array with exactly two items:

The current state of this state variable, initially set to the initial state you provided. The set function that lets you change it to any other value in response to interaction. To update what’s on the screen, call the set function with some next state:

    function handleClick() {
        setName('Robin');
    } 
__`Note`__

    Calling the set function does not change the current state in the already executing code:

    function handleClick() {
        setName('Robin');
        console.log(name); // Still "Taylor"!
    }
    It only affects what useState will return starting from the next render.

`Examples:`

- Counter

        import { useState } from 'react';

        export default function Counter() {
            const [count, setCount] = useState(0);

            function handleClick() {
                setCount(count + 1);
            }

            return (
                <button onClick={handleClick}>
                You pressed me {count} times
                </button>
            );
        }
- Text
        import { useState } from 'react';

        export default function MyInput() {
            const [text, setText] = useState('hello');

            function handleChange(e) {
                setText(e.target.value);
            }

            return (
                <>
                <input value={text} onChange={handleChange} />
                <p>You typed: {text}</p>
                <button onClick={() => setText('hello')}>
                    Reset
                </button>
                </>
            );
        }

- checkbox
        import { useState } from 'react';

        export default function MyCheckbox() {
        const [liked, setLiked] = useState(true);

        function handleChange(e) {
            setLiked(e.target.checked);
        }

        return (
            <>
            <label>
                <input
                type="checkbox"
                checked={liked}
                onChange={handleChange}
                />
                I liked this
            </label>
            <p>You {liked ? 'liked' : 'did not like'} this.</p>
            </>
        );
        }

- two states
        import { useState } from 'react';

        export default function Form() {
        const [name, setName] = useState('Taylor');
        const [age, setAge] = useState(42);

        return (
            <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setAge(age + 1)}>
                Increment age
            </button>
            <p>Hello, {name}. You are {age}.</p>
            </>
        );
        }

__Reference__

- useState(initialState)
- useState is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
- In Strict Mode, React will call your initializer function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your initializer function is pure (as it should be), this should not affect the logic of your component. The result from one of the calls will be ignored.

__Troubleshooting__
- I’ve updated the state, but logging gives me the old value Calling the set function does not change state in the running code:
        function handleClick() {
        console.log(count);  // 0

        setCount(count + 1); // Request a re-render with 1
        console.log(count);  // Still 0!

        setTimeout(() => {
            console.log(count); // Also 0!
        }, 5000);
        }
This is because states behaves like a snapshot. Updating state requests another render with the new state value, but does not affect the count JavaScript variable in your already-running event handler.

If you need to use the next state, you can save it in a variable before passing it to the set function:

    const nextCount = count + 1;
    setCount(nextCount);

    console.log(count);     // 0
    console.log(nextCount); // 1
- I’ve updated the state, but the screen doesn’t update
- I’m getting an error: “Too many re-renders”

You might get an error that says: Too many re-renders. React limits the number of renders to prevent an infinite loop. Typically, this means that you’re unconditionally setting state during render, so your component enters a loop: render, set state (which causes a render), render, set state (which causes a render), and so on. Very often, this is caused by a mistake in specifying an event handler:

    // 🚩 Wrong: calls the handler during render
    return <button onClick={handleClick()}>Click me</button>

    // ✅ Correct: passes down the event handler
    return <button onClick={handleClick}>Click me</button>

    // ✅ Correct: passes down an inline function
    return <button onClick={(e) => handleClick(e)}>Click me</button>
If you can’t find the cause of this error, click on the arrow next to the error in the console and look through the JavaScript stack to find the specific set function call responsible for the error.

- My initialiser or updater function runs twice
In Strict Mode, React will call some of your functions twice instead of once:

This is expected and shouldn’t break your code.

This development-only behaviour helps you keep components pure. React uses the result of one of the calls, and ignores the result of the other call.

- I’m trying to set the state to a function, but it gets called instead