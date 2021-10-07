var s = require('os');
console.log("CPU Architecture: "+s.arch());
console.log("Free Memory of System: "+s.freemem()/(1024*1024*1024)+" GB");
console.log("Total Memory of System: "+s.totalmem()/(1024*1024*1024)+" GB");
console.log("OS Platform: "+s.platform());
console.log("Current User: "+s.userInfo());