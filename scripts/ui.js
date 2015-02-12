//This code is for the UI!

var UI = React.createClass({

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
      <div>
        <table>
          <tr>
            <td>
              <form onSubmit={this.handleRent}>
                <h1><button>{'Rent a Bike'}</button></h1>
              </form>
            </td>
            <td>
              <form onSubmit={this.handleInformation}>
                <h1><button>{'Information'}</button></h1>
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
