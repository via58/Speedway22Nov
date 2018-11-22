var fs = require('fs');
   var data={
       "name":"vijay",
       "age" :"25"
   }
   __filename='cart.json';
  const path = __dirname+ '/'+__filename;



   data = JSON.stringify(data)
fs.appendFile(path, data,{'Content-Type': 'application/json'}, function (err) {
  if (err) throw err;
  console.log("saved !");
  console.log(path);
});


fs.appendFile('C:/Users/543687/Desktop/DialogFlow/file.json', data,{'Content-Type': 'application/json'}, function (err) {
  if (err) throw err;
  console.log("saved !");
  
});

