//use jscomplete.com/playground to run code

//function expression
const Component = function(){
    return <h1> hello </h1>
   }
   
   ReactDOM.render(
     <Component/>,
     document.getElementById('mountNode')
   )

//function statement
function Component(){
    return <div> ssup </div>;
  }
  
  ReactDOM.render(
    <Component/>, // function component that returns the <div> ssup </div>;
    document.getElementById('mountNode') // DOM element in browser where we wish React component to show up
  )

