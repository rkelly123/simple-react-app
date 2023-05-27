import Greetings from "./Greeting.js"

export default function SoManyGreetings() {
    return <div>
        <Greetings sayHello="Hello"/>
        <Greetings sayHello="Bonjour"/>
        <Greetings sayHello="Hola"/>
    </div>
}
