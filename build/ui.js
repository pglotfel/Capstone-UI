
var Loader = require('halogen/BounceLoader');
var React = require('react');
var WebSocket = require('ws');

var exampleSocket = new WebSocket("ws://localhost:8080");

exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};

var Example = React.createClass({displayName: "Example",
  render: function() {
    return (
      React.createElement(Loader, {color: "#AdceFA", size: "100%"})
    );
  }
});

var Window = React.createClass({displayName: "Window",

  getInitialState: function() {

    return {data: "loading"};
  },

  altSetState: function(data) {
    this.setState({data: data});
  },

  componentDidMount: function() {

    exampleSocket.onmessage = function (event) {
      try{
        this.altSetState(event.data);
        window.alert(event.data);
      } catch(err) {
        window.alert(err);
      }
    }.bind(this);
  },

  renderWindow: function(state) {

    switch(state) {

      case "loading":
        return (
          React.createElement("div", {id: "center"}, 
            React.createElement(Example, {id: "loader"}), 
            React.createElement("div", {id: "text"}, 
              React.createElement("center", null, "Retrieving Bike")
            )
          )
        );
      break;

      default:
        return (
          React.createElement("div", {id: "center"})
        );
    }
  },

  render: function() {

    window.alert('rendering');

    return (
      this.renderWindow(this.state.data)
    );
  }
});

//This code is for the UI!

var UI = React.createClass({displayName: "UI",

 //TODO: improve styling!

 //TODO: Change message box text to use props and state from react!  Probably have to make a comment area class.

 /*
 |[]          []|
 |[] messages []|
 |[]          []|
 */

   getInitialState: function() {
      return {display: "initial"};
   },


   //Function for renting.  Implement something more intelligent in the future.

   handleRent: function(e) {
     e.preventDefault();
     this.setState({display: "default"});
     //document.getElementById('textArea').value = 'You rented a bike!';
   },

   //Function for information.  Implement something more intelligent in the future.

   handleInformation: function(e){
     e.preventDefault();
     //document.getElementById('textArea').value = 'You requested information!';
   },

   //''

   handleChargeCard: function(e){
     e.preventDefault();
    // document.getElementById('textArea').value = 'You charged a card!';
   },

   //''

   handleGetCard: function(e){
     e.preventDefault();
     //document.getElementById('textArea').value = 'You got a card!';
   },

   render: function() {
     return(
       React.createElement("div", null, 
        React.createElement("table", null, 
          React.createElement("tr", null, 
            React.createElement("td", {id: "left"}, 
              React.createElement("form", {onSubmit: this.handleRent}, 
                React.createElement("button", null, 'Rent a Bike')
              )
            ), 
            React.createElement("td", null
            ), 
            React.createElement("td", {id: "right"}, 
              React.createElement("form", {onSubmit: this.handleInformation}, 
                React.createElement("button", null, 'Information')
              )
            )
          ), 
          React.createElement("tr", null, 
            React.createElement("td", {id: "left"}, 
              React.createElement("form", {onSubmit: this.handleChargeCard}, 
                React.createElement("button", null, 'Charge a Card')
              )
            ), 
            React.createElement("td", {id: "center"}, 
              React.createElement(Window, null)
            ), 
            React.createElement("td", {id: "right"}, 
              React.createElement("form", {onSubmit: this.handleGetCard}, 
                React.createElement("button", null, 'Get a Card')
              )
            )
          ), 
          React.createElement("tr", null, 
            React.createElement("td", {id: "left"}, 
              React.createElement("form", {onSubmit: this.handleRent}, 
                React.createElement("button", null, '')
              )
            ), 
            React.createElement("td", null
            ), 
            React.createElement("td", {id: "right"}, 
              React.createElement("form", {onSubmit: this.handleInformation}, 
                React.createElement("button", null, '')
              )
            )
          )
        )
      )
    );
  }
});

React.render(
  React.createElement(UI, null),
  document.getElementById('content')
);
