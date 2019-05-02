//use jscomplete.com/playground to run code

//step 1 - create button
<div id='root'></div>
function Button(){
    return <button>test</button>
}

ReactDOM.render(
    <Button/>,
    document.getElementById('root')
)

//step 2 - create a display for button
function Button(){
    return <button>test</button>
}

function Display(){
    return <div>...</div>
}

function App(){
    <div>
        <Button/>
        <Display/>
    </div>
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
//step 3
function Button(){
    const [counter, setCounter] = useState(0)
    return <button onClick = {() => setCounter(counter + 1)}> {counter} </button>
}

function Display(){
    return <div>...</div>
}

function App(){
    <div>
        <Button/>
        <Display/>
    </div>
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
// step 4 simplyfy
function Button(){
    const [counter, setCounter] = useState(0)
    const handler = () => setCounter(counter + 1)
    return (
    <button onClick = {handler}> 
    {counter} 
    </button>
)
}

function Display(){
    return <div>...</div>
}

function App(){
    <div>
        <Button/>
        <Display/>
    </div>
}
//step 5
function Button(){
    const handler = () => setCounter(counter + 1)
    return (
    <button onClick = {handler}> 
    {counter} 
    </button>
)
}

function Display(){
    return <div>...</div>
}

function App(){
    const [counter, setCounter] = useState(0)
    return(
    <div>
        <Button/>
        <Display/>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
//step 6
function Button(props){
    return (
    <button onClick = {props.onClickFun}> 
    +1 
    </button>
)
}

function Display(props){
    return <div>{props.message}</div>
}

function App(){
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter + 1)
    return(
    <div>
        <Button onClickFun = {increment}/>
        <Display message = {counter}/>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

//step 7 
function Button(props){
    return (
    <button onClick = {props.onClickFun(props.incro)}> 
    +{props.incro} 
    </button>
)
}

function Display(props){
    return <div>{props.message}</div>
}

function App(){
    const [counter, setCounter] = useState(0)
    const increment = (incrementValue) => setCounter(counter + incrementValue)
    return(
    <div>
        <Button onClickFun = {increment} incro = {1}/>
        <Button onClickFun = {increment} incro = {10}/>
        <Button onClickFun = {increment} incro = {20}/>
        <Button onClickFun = {increment} incro = {100}/>
        <Display message = {counter}/>
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
