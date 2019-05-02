// incrementing as many times a button is clicked
// practised exercise on jscomplete.com/playground

function Button(){
    // const is variable defining keyword
    // always return an array(useState)
    // syntax const [currentStateValue, functionToStateNewStateValue] = useState(initialStateValue)
    // 0 anything you pass there shows up as the button label 
    const [counter, setCounter] = useState(0) 
    return <button onClick = {() => setCounter(counter + 1)}>{counter}</button>;
}

// document is a web page
// DOM - document object model(represent the page) represent document so it can be manipulated
ReactDOM.render(
<Button/>,
// DOM Api call to display selected element 
document.getElementById('mountNode')
)

// always name your function with an uppercase letter
// useState() returns two items; first is a state object and second a function to change the state object(this case counter, setCounter)
