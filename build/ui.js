//This code is for the UI!

var UI = React.createClass({displayName: "UI",

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

  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("table", null, 
          React.createElement("tr", null, 
            React.createElement("td", null, 
              React.createElement("form", {onSubmit: this.handleRent}, 
                React.createElement("h1", null, React.createElement("button", null, 'Rent a Bike'))
              )
            ), 
            React.createElement("td", null, 
              React.createElement("form", {onSubmit: this.handleInformation}, 
                React.createElement("h1", null, React.createElement("button", null, 'Information'))
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
