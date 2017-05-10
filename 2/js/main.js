class MyComponent extends React.Component {
    render(){
        return (<div>
            <h1> {this.props.text}</h1>
            <p> This is my first React Component </p>
        </div>);
    }
}

ReactDOM.render(<MyComponent text="Hello World!!!!" />, document.getElementById("react-container"));