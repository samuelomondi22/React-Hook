//use jscomplete.com/playground to run code

function Button(){
    // counter state object
    // setCounter is counter state object
    // useState(initial value of state element, counter)
    const chicken = function(){
      return setCounter(counter + 1);
    }
    const [counter, setCounter] = useState(0);
    return (
    <button onClick = {chicken}> 
      {counter}
      </button>
      );
  }
  function Display(){
    return <div>....</div>
  }
  function App(){
    return (
     <div>
     <Button/>
      <Display/>
    </div>
    );
  }
  ReactDOM.render(
    // making them children of another react element(<div> or <> or <React.fragment>)
    // <div>
    // <Button/>
    // <Display/>
    //   </div>,
    // can also work as [<Button/>, <Display/>]
    <App/>,
    document.getElementById('mountNode')
  )