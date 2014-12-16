// Main file

var art = require('ascii-art'),
    ntpClient = require('ntp-client');

/*
art.font('Demo!', 'Doom', function(rendered){ 
    console.log(art.style(rendered, 'blue_bg+red+blink+inverse')); 
}); 



ntpClient.getNetworkTime("pool.ntp.org", 123, function(err, date) {
    if(err) {
        console.error(err);
        return;
    }

    console.log("Current time : ");
    console.log(date);
});

*/

function pad(i) {
  if (i < 10) {
    return "0" + i;
  }
  
  return i;
}

function formatDate(d) {
  return pad(d.getDate()) + "." + pad(d.getMonth() + 1) + "." + d.getFullYear() + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
}

ntpClient.getNetworkTime("pool.ntp.org", 123, function(err, date) {
    if(err) {
        console.error(err);
        return;
    }

    var sysdate = new Date();
  
    console.log("Current time : ", date);
    console.log("System Time : ", sysdate);
  
    console.log("Skew: ", (sysdate - date));
  
  art.font(formatDate(d), 'Doom', function(rendered) {
    console.log(rendered);
  });
});