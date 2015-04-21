

var Halogen = require('halogen');

var Example = React.createClass({displayName: "Example",

    render: function() {

        // try change me to a custom color like "red" or "#000000"
        var color = '#4DAF7C';

        var style = {
            display: '-webkit-flex',
            display: 'flex',
            webkitFlex: '0 1 auto',
            flex: '0 1 auto',
            webkitFlexDirection: 'column',
            flexDirection: 'column',
            webkitFlexGrow: 1,
            flexGrow: 1,
            webkitFlexShrink: 0,
            flexShrink: 0,
            webkitFlexBasis: '25%',
            flexBasis: '25%',
            maxWidth: '25%',
            height: '200px',
            webkitAlignItems: 'center',
            alignItems: 'center',
            webkitJustifyContent: 'center',
            justifyContent: 'center'
        };

        return (
            React.createElement("div", {style: {
                boxSizing: 'border-box',
                display: '-webkit-flex',
                display: 'flex',
                webkitFlex: '0 1 auto',
                flex: '0 1 auto',
                webkitFlexDirection: 'row',
                flexDirection: 'row',
                webkitFlexWrap: 'wrap',
                flexWrap: 'wrap'
            }}, 
                React.createElement("div", {style: style}, React.createElement(Halogen.PulseLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.GridLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.ClipLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.RiseLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.BeatLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.SyncLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.RotateLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.FadeLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.PacmanLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.SquareLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.ScaleLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.SkewLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.MoonLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.RingLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.BounceLoader, {color: color})), 
                React.createElement("div", {style: style}, React.createElement(Halogen.DotLoader, {color: color}))
            )
        );
    }
});

var Window = React.createClass({displayName: "Window",

  getInitialState: function() {
    return {display: "initial"};
  },

  render : function() {

    var renderWindow = function(state) {
      if(state == "default") {
        return (
          React.createElement("textarea", {id: "textArea", disabled: true, readOnly: true}, 
            "default"
          )
        );
      } else {
        return (
          React.createElement("textarea", {id: "textArea", disabled: true, readOnly: true}, 
            "initial"
          )
        );
      }
    };

    return (
      React.createElement("div", null)
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
  React.createElement(Example, null),
  document.getElementById('content')
);
