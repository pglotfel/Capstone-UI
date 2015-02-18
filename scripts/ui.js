//This code is for the UI!

var UI = React.createClass({

 //TODO: improve styling!

 //TODO: Add a "message box" in the middle of the screen to display messages to the user.  Perhaps in the middle of the table?

 /*

 |[]          []|
 |[] messages []|
 |[]          []|

 */


   //Function for renting.  Implement something more intelligent in the future.

   handleRent: function(e) {
     e.preventDefault();
     window.alert("You rented a bike!");
   },

   //Function for information.  Implement something more intelligent in the future.

   handleInformation: function(e){
     e.preventDefault();
     window.alert("You requested information!");
   },

   //''

   handleChargeCard: function(e){
     e.preventDefault();
     window.alert("You charged a card!");
   },

   //''

   handleGetCard: function(e){
     e.preventDefault();
     window.alert("You got a card!");
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
              <div id="center">
                <textarea disabled readOnly>
                  {'Text here!'}
                </textarea>
              </div>
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
