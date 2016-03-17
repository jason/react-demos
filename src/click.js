var React = require('react');
var ReactDOM = require('react-dom');

var Click = React.createClass({
  getInitialState: function() {
    return {
      clicks: this.props.initialClicks
    };
  },

  addClick: function() {
    this.setState({ clicks: this.state.clicks + 1})
  },

  render: function() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={ this.addClick }
        >
          {this.props.btnName}&nbsp;
          <span className="badge">{this.state.clicks}</span>
        </button>
        <ClickCounterCaption number={ this.state.clicks }/>
      </div>
    );
  }
});

var ClickCounterCaption = React.createClass({
  render: function() {
    return (
      <div>

      Number of Clicks / 2: { this.props.number / 2.0 }

      </div>
      );
  }
})

ReactDOM.render(<Click btnName="Clicks" initialClicks={2} />, document.querySelector('#click-counter'))