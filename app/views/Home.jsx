var React = require('react');
var moment = require('moment')

var test = function(name) {
  console.log(name)
  return name
}

class Home extends React.Component {

  lastChecked(name) {
    let lastModifiedTime = this.props.LastModified
    var count = 0
    let intervalId = setInterval(() => {
      console.log(moment(lastModifiedTime) - moment())
      return moment(lastModifiedTime).fromNow()
    }, 1000)
  }


  render() {
    return (
      <div>
        <h1>{this.props.Stop.Name}</h1>
        <p>Last updated {this.lastChecked()}</p>
        <h3>Next to depart:</h3>
        <p>Expected: {moment(this.props.Services[0].AimedDeparture).format('h:mm a')}</p>
        <p>Actual: {moment(this.props.Services[0].DisplayDeparture).format('h:mm a')}</p>
        <h4>Actually due in:</h4>
        <p>{moment.duration(this.props.Services[0].DisplayDepartureSeconds, 'seconds').humanize()}</p>
      </div>
    );
  }
}

module.exports = Home;
