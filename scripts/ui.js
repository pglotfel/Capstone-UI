// var io = require('socket.io')();
//
// var socket;
//
// io.on('connection', function(s) {
//   socket = s;
//  });

var Window = React.createClass({

  getInitialState: function() {
    return {display: "initial"};
  },

  render : function() {

    var renderWindow = function(state) {
      if(state == "default") {
        return (
          <textarea id="textArea" disabled readOnly>
            {"default"}
          </textarea>
        );
      } else {
        return (
          <textarea id="textArea" disabled readOnly>
            {"initial"}
          </textarea>
        );
      }
    };

    return (
      <div class='window'>
          {renderWindow(this.state.display)}
      </div>
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
