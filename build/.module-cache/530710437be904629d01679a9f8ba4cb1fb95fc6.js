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

var UI = React.createClass({displayName: "UI",


  handleSubmit: function(e) {
    e.preventDefault();
    window.alert("You rented a bike!");
  },

  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("table", {onSubmit: this.handleSubmit}, 
          React.createElement("button", null, 'Rent a Bike'), 
          React.createElement("button", null, 'Information')
        )
      )
    );
  }
});


React.render(
  React.createElement(UI, null),
  document.getElementById('content')
);
