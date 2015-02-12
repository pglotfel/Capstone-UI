//This code is for the UI!

// var TodoList = React.createClass({
//   render: function() {
//     var createItem = function(itemText) {
//       return <li>{itemText}</li>;
//     };
//     return <ul>{this.props.items.map(createItem)}</ul>;
//   }
// });
//
// var TodoApp = React.createClass({
//   getInitialState: function() {
//     return {items: [], text: ''};
//   },
//   onChange: function(e) {
//     this.setState({text: e.target.value});
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var nextItems = this.state.items.concat([this.state.text]);
//     var nextText = '';
//     this.setState({items: nextItems, text: nextText});
//   },
//   render: function() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.onChange} value={this.state.text} />
//           <button>{'Add #' + (this.state.items.length + 1)}</button>
//         </form>
//       </div>
//     );
//   }
// });


//There's probably a better way to do this...

// var UI = React.createClass({
//
//
//   handleRent: function(e) {
//     e.preventDefault();
//     window.alert("You rented a bike!");
//   },
//
//   handleInformation: function(e){
//     e.preventDefault();
//     window.alert("You requested information!");
//   },
//
//   render: function() {
//     return(
//       <div>
//
//         <Button>
//           onClick={this.handleRent}
//           disabled = false;
//           {'Rent a bike'}
//         </Button>
//
//       </div>
//     );
//   }
// });

var LoadingButton = React.createClass({displayName: "LoadingButton",
  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  render: function() {
    var isLoading = this.state.isLoading;
    return (
        React.createElement(Button, {
          bsStyle: "primary", 
          disabled: isLoading, 
          onClick: !isLoading ? this.handleClick : null}, 
          isLoading ? 'Loading...' : 'Loading state'
        )
      );
  },

  handleClick: function() {
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(function() {

      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }.bind(this), 2000);
  }
});

React.render(
  React.createElement(LoadingButton, null),
  document.getElementById('content')
);
