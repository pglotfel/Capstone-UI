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

var UI = React.createClass({displayName: "UI",


  handleRent: function(e) {
    e.preventDefault();
    window.alert("You rented a bike!");
  },

  handleInformation: function(e){
    e.preventDefault();
    window.alert("You requested information!");
  },

  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("form", {onSubmit: this.handleRent}, 
          React.createElement("h1", null, React.createElement("button", null, 'Rent a Bike'))
        ), 
        React.createElement("form", {onSubmit: this.handleInformation}, 
          React.createElement("h1", null, React.createElement("button", null, 'Information'))
        )
      )
    );
  }
});

React.render(
  React.createElement(UI, null),
  document.getElementById('content')
);
