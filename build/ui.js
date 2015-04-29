
var Loader = require('halogen/SyncLoader');
var React = require('react');
var WebSocket = require('ws');

var exampleSocket = new WebSocket("ws://localhost:8080");

exampleSocket.onopen = function (event) {
  exampleSocket.send("UI Connected");
};

var Example = React.createClass({displayName: "Example",
  render: function() {
    return (
      React.createElement("center", null, " ", React.createElement(Loader, {color: "#27ae60", size: "20px"}), " ")
    );
  }
});

var Window = React.createClass({displayName: "Window",

  getInitialState: function() {

    return {data: "default"};
  },

  altSetState: function(data) {
    this.setState({data: data});
  },

  componentDidMount: function() {

    exampleSocket.onmessage = function (event) {
      this.altSetState(event.data);
    }.bind(this);
  },

  renderWindow: function(state) {

    switch(state) {

      case "loading":
        return (
          React.createElement("div", null, 
           React.createElement("table", null, 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", null
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             ), 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", {id: "center"}, 
                 React.createElement("div", {id: "center"}, 
                   React.createElement(Example, {id: "loader"}), 
                   React.createElement("div", {id: "text"}, 
                     React.createElement("center", null, "Retrieving Bike")
                   )
                 )
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             ), 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", null
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             )
           )
         )
        );
      break;

      case "bike0":
        return (
          React.createElement("div", null, 
           React.createElement("table", null, 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", null
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             ), 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", {id: "center"}, 
                 React.createElement("div", {id: "center"}, 
                   React.createElement("div", {id: "text"}, 
                     React.createElement("center", null, "Your bike is in station 1!")
                   )
                 )
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             ), 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", null
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             )
           )
         )
        );
      break;

      case "nobikes":
        return (
          React.createElement("div", null, 
           React.createElement("table", null, 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", null
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             ), 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", {id: "center"}, 
                 React.createElement("div", {id: "center"}, 
                   React.createElement("div", {id: "text"}, 
                     React.createElement("center", null, "Sorry, there are no bikes available")
                   )
                 )
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             ), 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", null
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             )
           )
         )
        );
      break;

      case "default":
        return (
          React.createElement("div", null, 
           React.createElement("table", null, 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, 'Rent a Bike')
                 )
               ), 
               React.createElement("td", null
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, 'Information')
                 )
               )
             ), 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, 'Charge a Card')
                 )
               ), 
               React.createElement("td", {id: "center"}, 
                 React.createElement("div", {id: "center"})
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, 'Get a Card')
                 )
               )
             ), 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", null
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             )
           )
         )
        );
	       break;

     default:
        return (
          React.createElement("div", null, 
           React.createElement("table", null, 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, 'Rent a Bike')
                 )
               ), 
               React.createElement("td", null
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, 'Information')
                 )
               )
             ), 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, 'Charge a Card')
                 )
               ), 
               React.createElement("td", {id: "center"}, 
                 React.createElement("div", {id: "center"})
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, 'Get a Card')
                 )
               )
             ), 
             React.createElement("tr", null, 
               React.createElement("td", {id: "left"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               ), 
               React.createElement("td", null
               ), 
               React.createElement("td", {id: "right"}, 
                 React.createElement("form", null, 
                   React.createElement("button", null, '')
                 )
               )
             )
           )
         )
        );
    }
  },

  render: function() {

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
  React.createElement(Window, null),
  document.getElementById('content')
);
