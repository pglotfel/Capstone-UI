
var Loader = require('halogen/SyncLoader');
var React = require('react');
var WebSocket = require('ws');

var exampleSocket = new WebSocket("ws://localhost:8080");

exampleSocket.onopen = function (event) {
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};

var Example = React.createClass({
  render: function() {
    return (
      <center> <Loader color="#27ae60" size="20px" /> </center>
    );
  }
});

var Window = React.createClass({

  getInitialState: function() {

    return {data: "loading"};
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
          <div id="center">
            <Example id="loader"/>
            <div id="text">
              {<center>Retrieving Bike</center>}
            </div>
          </div>
        );
      break;

      case "bike0":
        return (
          <div id="center">
            <div id="text">
              {<center>Your bike is in station 1!</center>}
            </div>
          </div>
        );
      break;

      case "nobikes":
        return (
          <div id="center">
            <div id="text">
              {<center>Sorry, there are no bikes available</center>}
            </div>
          </div>
        );
      break;

      default:
        return (
          <div id="center"/>
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

var UI = React.createClass({

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
       <div>
        <table>
          <tr>
            <td id="left">
              <form onSubmit={this.handleRent}>
                <button>{'Rent a Bike'}</button>
              </form>
            </td>
            <td>
            </td>
            <td id="right">
              <form onSubmit={this.handleInformation}>
                <button>{'Information'}</button>
              </form>
            </td>
          </tr>
          <tr>
            <td id="left">
              <form onSubmit={this.handleChargeCard}>
                <button>{'Charge a Card'}</button>
              </form>
            </td>
            <td id="center">
              <Window />
            </td>
            <td id="right">
              <form onSubmit={this.handleGetCard}>
                <button>{'Get a Card'}</button>
              </form>
            </td>
          </tr>
          <tr>
            <td id="left">
              <form onSubmit={this.handleRent}>
                <button>{''}</button>
              </form>
            </td>
            <td>
            </td>
            <td id="right">
              <form onSubmit={this.handleInformation}>
                <button>{''}</button>
              </form>
            </td>
          </tr>
        </table>
      </div>
    );
  }
});

React.render(
  <UI />,
  document.getElementById('content')
);
