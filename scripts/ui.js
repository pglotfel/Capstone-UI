

var Halogen = require('halogen');

var Example = React.createClass({

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
            <div style={{
                boxSizing: 'border-box',
                display: '-webkit-flex',
                display: 'flex',
                webkitFlex: '0 1 auto',
                flex: '0 1 auto',
                webkitFlexDirection: 'row',
                flexDirection: 'row',
                webkitFlexWrap: 'wrap',
                flexWrap: 'wrap'
            }}>
                <div style={style}><Halogen.PulseLoader color={color}/></div>
                <div style={style}><Halogen.GridLoader color={color}/></div>
                <div style={style}><Halogen.ClipLoader color={color}/></div>
                <div style={style}><Halogen.RiseLoader color={color}/></div>
                <div style={style}><Halogen.BeatLoader color={color}/></div>
                <div style={style}><Halogen.SyncLoader color={color}/></div>
                <div style={style}><Halogen.RotateLoader color={color}/></div>
                <div style={style}><Halogen.FadeLoader color={color}/></div>
                <div style={style}><Halogen.PacmanLoader color={color}/></div>
                <div style={style}><Halogen.SquareLoader color={color}/></div>
                <div style={style}><Halogen.ScaleLoader color={color}/></div>
                <div style={style}><Halogen.SkewLoader color={color}/></div>
                <div style={style}><Halogen.MoonLoader color={color}/></div>
                <div style={style}><Halogen.RingLoader color={color}/></div>
                <div style={style}><Halogen.BounceLoader color={color}/></div>
                <div style={style}><Halogen.DotLoader color={color}/></div>
            </div>
        );
    }
});

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
      <div />
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
  <Example />,
  document.getElementById('content')
);
