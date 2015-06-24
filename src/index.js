"use strict";

var MyComponent = React.createClass({
    render: function(){
        return (<h1>Hello, {this.props.name} !</h1>);
    }
});

React.renderComponent(<MyComponent
    name="Patric"/>
    document.getElementById('logo'));