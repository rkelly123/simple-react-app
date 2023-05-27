import Hello from "./Hello.js";

export default function Greetings(props) {
    return <div>
        <Hello name="Rory" {...props}/>
        <Hello name="Alex" {...props}/>
        <Hello name="Joey" {...props}/>
    </div>
}
