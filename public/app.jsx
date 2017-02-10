// 02/10/17 LEFT OFF AT THE START OF SECTION 4 / #25 - BOILERPLATE PROJECT

var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var first_name = "Bob Smith";

ReactDOM.render(
<Greeter name={ first_name } />,
document.getElementById('app')
);
