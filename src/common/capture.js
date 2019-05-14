var page  = require('webpage').create();

var system = require('system');

var url = system.args[1];
var filePath = system.args[2];
var height = system.args[3];

page.viewportSize = { 
  width: 320, 
  height: parseInt(height)
};

page.open(url, function(status){
  if (status != 'success') {
  
    phantom.exit();
  }

  window.setTimeout(function() {
    page.render(filePath, {format: 'jpeg', quality: '100'});
  
    phantom.exit();
  }, 5000)
});