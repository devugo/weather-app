$(document).ready(function(){
  var long;
  var lat;

  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      long =position.coords.longitude;
      lat = position.coords.latitude;
      
  
  var api ='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=e46c671d27ea2c161d0fb592d6b0dbb5';
      
      
  $.getJSON(api, function(data) {
      var fTemp;
  var cTemp;
  var kTemp;
    
  var tempSwap = true;
    
    var weatherType = data.weather[0].description;
    kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    
    fTemp = ((kTemp)*(9/5)-459.67).toFixed(2);
    cTemp = (kTemp-273).toFixed(2);
    
    console.log('city');
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp + " &#8457;");
    $("#fTemp").click(function(){
      if(tempSwap===false) {
        $("#fTemp").html(fTemp + " &#8457;");
        tempSwap=true;
      } else {
        $("#fTemp").html(cTemp + " &#8451;");
        tempSwap=false;
      }
      
      
      
    });
    
    
    $("#windSpeed").html(windSpeed + " m/s");
     
      if(fTemp>70) {
        $('body').css('background-image', 'url(https://cdn.pixabay.com/photo/2017/12/20/14/53/clouds-3030063_960_720.jpg)');
      } else if(fTemp>60) {
        
      }
  
  
    });

  });
    
 }
  
});