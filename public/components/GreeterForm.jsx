var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    
    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    
    if( name.length > 0 ){
      this.refs.name.value = '';
      updates.name = name;
    }
    
    if( message.length > 0 ){
      this.refs.message.value = '';
      updates.message = message;
    }
    
    this.props.onNewState(updates);
  },
  
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" placeholder="Enter name" ref="name"/>
          </div>
          <div>
            <textarea placeholder="Enter message" ref="message"></textarea>
          </div>
          <div>
            <button> submit </button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = GreeterForm;