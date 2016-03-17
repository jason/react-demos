var React = require('react');
var ReactDOM = require('react-dom');

var Lifecycle = React.createClass({
  getInitialState: function() {
    alert('getInitialState');
    return {};
  },

  componentWillMount: function() {
    alert('componentWillMount');
  },

  componentDidMount: function() {
    alert('componentDidMount')
  },

  render: function() {
    alert('render');
    return (
      <div>
        Yo!
        <LifecycleChild />
      </div>
      );
  }
});

var LifecycleChild = React.createClass({
  getInitialState: function() {
    alert('getInitialState child');
    return {};
  },

  componentWillMount: function() {
    alert('componentWillMount child');
  },

  componentDidMount: function() {
    alert('componentDidMount child')
  },

  render: function() {
    alert('render child');
    return (
      <div>Yo! Child</div>
      );
  }
});
ReactDOM.render(<Lifecycle />, document.querySelector('#lifecycle'));