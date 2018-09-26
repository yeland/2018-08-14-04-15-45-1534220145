// Write your cade below:
module.exports = function main() {
  if(arguments.length===0){
	  return 0;
  }
  
  var x = arguments[0];
  var y = arguments[1];
  
  return x%y;
};