//This code is for the UI!

var UI = React.createClass({displayName: "UI",

 //TODO: improve styling!

 //TODO: Change message box text to use props and state from react!  Probably have to make a comment area class.

 /*

 |[]          []|
 |[] messages []|
 |[]          []|

 */


   //Function for renting.  Implement something more intelligent in the future.

   handleRent: function(e) {
     e.preventDefault();
     document.getElementById('textArea').value = 'You rented a bike!';
   },

   //Function for information.  Implement something more intelligent in the future.

   handleInformation: function(e){
     e.preventDefault();
     document.getElementById('textArea').value = 'You requested information!';
   },

   //''

   handleChargeCard: function(e){
     e.preventDefault();
     document.getElementById('textArea').value = 'You charged a card!';
   },

   //''

   handleGetCard: function(e){
     e.preventDefault();
     document.getElementById('textArea').value = 'You got a card!';
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
              React.createElement("div", {id: "center"}, 
                React.createElement("textarea", {id: "textArea", disabled: true, readOnly: true}, 
                  ""
                )
              )
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
