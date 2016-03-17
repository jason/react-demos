var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="">Hello React</div>
      </div>
    );
  }
});

ReactDOM.render(<Hello title={15}/>, document.querySelector('#hello'));