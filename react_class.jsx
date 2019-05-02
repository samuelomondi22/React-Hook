//use jscomplete.com/playground to run code

class Card extends React.Component{
    render(){ // must function in class
      return(
        <div className = 'github profile'>
          <img src='https://placeholder.it/75'/>
           <div className = 'info'>
           <div className = 'company' > my company name </div>
           <div className = 'name' > my name is </div>
          </div>
          </div>
      );
    }
  }
  class App extends React.Component{
  render(){
    return (
      <div>
      <div className = 'header'> {this.props.title} </div>
      <Card/>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App title = 'Github'/>,
    document.getElementById('mountNode')
  )