#!/usr/bin/env node
// Main file

var art = require('ascii-art'),
    ntpClient = require('ntp-client');

function pad(i) {
  if (i < 10) {
    return "0" + i;
  }
  
  return i;
}

function formatDate(d) {
  return pad(d.getDate()) + "." + pad(d.getMonth() + 1) + "." + d.getFullYear() + " - " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
}

ntpClient.getNetworkTime("pool.ntp.org", 123, function(err, date) {
  if(err) {
    console.error(err);
    return;
  }

  var sysdate = new Date();
  
  art.font(formatDate(date), 'Doom', function(rendered) {
    if (Math.abs(sysdate - date) > 1 * 60 * 1000) { // If skew is bigger than 1000
      console.log(art.style(rendered, 'red'));
      console.log('');
      
      var skew = Math.round(Math.abs(sysdate - date) / 1000);
      if (skew > 5 * 60 * 60) { // If bigger than 5 hours, mark the skew red and bold!
        skew = art.style(skew, 'red+bold');
      }
      console.log("Skew:", skew, "sec.");
    }
    else {
      console.log(rendered);
    }
  });
});