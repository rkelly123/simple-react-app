import {useState} from 'react';

export default function Button() {
    const [count, setCount] = useState(9);
    return (
        <div>
            <h1>I said hello {count} times!</h1>
            <button onClick={() => setCount(count + 1)}>
                Hello
            </button>
            <button onClick={() => setCount(count - 1)}>
                Goodbye
            </button>
        </div>
    );
}
