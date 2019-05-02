//use jscomplete.com/playground to run code

const Clock = () => {
    ReactDOM.render(
        React.createElement(
            'div',
            null,
            'hello react',
            React.createElement('input', null),
            React.createElement('pre', null, (new Date).toLocaleTimeString())
        )
    )
}
setInterval(Clock, 1000)