//Write your Constructor Function that will generate a different response for each day of the week
var Response = function(){
  var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var messages = [
    'Welcome to the Monday Morning blues, at least there is football tonight.',
    'Ruby Tuesday, the week is just getting started.',
    'Wednesday! Humpday, halfway through the week!',
    'Thursday is not so bad, just one more day till the weekend!',
    "It's, Friday, it's Friday, gotta get down on Friday!",
    'Saturday. Keep sleeping.',
    'It is Sunday! Get ready for next week!'
  ];
  return {
    getResponse: function(day){
      for (var i = 0; i < days.length; i++){
        if (day === days[i]){
          return messages[i];
        }
      }
    }
  };
};

module.exports = Response;
