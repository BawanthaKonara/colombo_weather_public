//  day one today.............
          link = "https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=bf8d15a80c89aa4f4c82ad6cbb3f5ac5";
          var request = new XMLHttpRequest();
          request.open('GET',link,true);
          request.onload = function()
          {

           var obj = JSON.parse(this.response);
           console.log(obj);
           
            document.getElementById('cityname').innerHTML = obj.name;

            //document.getElementById('sky_status').innerHTML = obj.weather[0].description;
            document.getElementById('sky_status_icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
            
            document.getElementById('temp').innerHTML = Math.round(obj.main.temp - 273.15);
            document.getElementById('pressure').innerHTML = obj.main.pressure;
            document.getElementById('wind').innerHTML = obj.wind.speed;
            document.getElementById('humidity').innerHTML = obj.main.humidity;
            
          }
          request.send();

//  next 3 days.............
          link = "https://api.openweathermap.org/data/2.5/onecall?lat=6.927079&lon=79.861244&exclude=hourly,minutely&appid=2b8875d0c76131b0d6ff7f5c21f02d04";
          var request = new XMLHttpRequest();
          request.open('GET',link,true);
          request.onload = function()
          {

           var obj = JSON.parse(this.response);
           console.log(obj);
           
            //document.getElementById('cityname').innerHTML = obj.name;

            //document.getElementById('sky_status').innerHTML = obj.weather[0].description;
            document.getElementById('sky_status_icon1').src = "http://openweathermap.org/img/w/" + obj.daily[1].weather[0].icon + ".png";
            
            document.getElementById('temp1').innerHTML = Math.round(obj.daily[1].temp.day - 273.15);
            document.getElementById('pressure1').innerHTML = obj.daily[1].pressure;
            document.getElementById('wind1').innerHTML = obj.daily[1].wind_speed;
            document.getElementById('humidity1').innerHTML = obj.daily[1].humidity;





            document.getElementById('sky_status_icon2').src = "http://openweathermap.org/img/w/" + obj.daily[2].weather[0].icon + ".png";
            
            document.getElementById('temp2').innerHTML = Math.round(obj.daily[2].temp.day - 273.15);
            document.getElementById('pressure2').innerHTML = obj.daily[2].pressure;
            document.getElementById('wind2').innerHTML = obj.daily[2].wind_speed;
            document.getElementById('humidity2').innerHTML = obj.daily[2].humidity;





            document.getElementById('sky_status_icon3').src = "http://openweathermap.org/img/w/" + obj.daily[3].weather[0].icon + ".png";
            
            document.getElementById('temp3').innerHTML = Math.round(obj.daily[3].temp.day - 273.15);
            document.getElementById('pressure3').innerHTML = obj.daily[3].pressure;
            document.getElementById('wind3').innerHTML = obj.daily[3].wind_speed;
            document.getElementById('humidity3').innerHTML = obj.daily[3].humidity;



            document.getElementById('sky_status_icon4').src = "http://openweathermap.org/img/w/" + obj.daily[4].weather[0].icon + ".png";
            
            document.getElementById('temp4').innerHTML = Math.round(obj.daily[4].temp.day - 273.15);
            document.getElementById('pressure4').innerHTML = obj.daily[4].pressure;
            document.getElementById('wind4').innerHTML = obj.daily[4].wind_speed;
            document.getElementById('humidity4').innerHTML = obj.daily[4].humidity;



            document.getElementById('sky_status_icon5').src = "http://openweathermap.org/img/w/" + obj.daily[5].weather[0].icon + ".png";
            
            document.getElementById('temp5').innerHTML = Math.round(obj.daily[5].temp.day - 273.15);
            document.getElementById('pressure5').innerHTML = obj.daily[5].pressure;
            document.getElementById('wind5').innerHTML = obj.daily[5].wind_speed;
            document.getElementById('humidity5').innerHTML = obj.daily[5].humidity;




            document.getElementById('sky_status_icon6').src = "http://openweathermap.org/img/w/" + obj.daily[6].weather[0].icon + ".png";
            
            document.getElementById('temp6').innerHTML = Math.round(obj.daily[6].temp.day - 273.15);
            document.getElementById('pressure6').innerHTML = obj.daily[6].pressure;
            document.getElementById('wind6').innerHTML = obj.daily[6].wind_speed;
            document.getElementById('humidity6').innerHTML = obj.daily[6].humidity;




            document.getElementById('sky_status_icon7').src = "http://openweathermap.org/img/w/" + obj.daily[7].weather[0].icon + ".png";
            
            document.getElementById('temp7').innerHTML = Math.round(obj.daily[7].temp.day - 273.15);
            document.getElementById('pressure7').innerHTML = obj.daily[7].pressure;
            document.getElementById('wind7').innerHTML = obj.daily[7].wind_speed;
            document.getElementById('humidity7').innerHTML = obj.daily[7].humidity;



            //document.getElementById("date_c").innerHTML = Date();



            

          }
          request.send();



    {  //current date and time...........

        function display_c(){
                var refresh=1000; // Refresh rate in milli seconds.............
                mytime=setTimeout('display_ct()',refresh)
        }


        function display_ct() {         //current date and time...........
        
                var today = new Date();

                var day1 = new Date();
                day1.setDate(day1.getDate() + 1);

                var day2 = new Date();
                day2.setDate(day2.getDate() + 2);

                var day3 = new Date();
                day3.setDate(day3.getDate() + 3);

                var day4 = new Date();
                day4.setDate(day4.getDate() + 4);

                var day5 = new Date();
                day5.setDate(day5.getDate() + 5);

                var day6 = new Date();
                day6.setDate(day6.getDate() + 6);

                var day7 = new Date();
                day7.setDate(day7.getDate() + 7);

                var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                document.getElementById("date_c").innerHTML = days[today.getDay()]+". "+months[today.getMonth()]+" "+[today.getDate()] ;

                document.getElementById("time_c").innerHTML = [today.getHours()]+":"+[today.getMinutes()]+":"+[today.getSeconds()] ;

                document.getElementById("date_n1").innerHTML = days[day1.getDay()]+". "+months[day1.getMonth()]+" "+[day1.getDate()] ;

                document.getElementById("date_n2").innerHTML = days[day2.getDay()]+". "+months[day2.getMonth()]+" "+[day2.getDate()] ;

                document.getElementById("date_n3").innerHTML = days[day3.getDay()]+". "+months[day3.getMonth()]+" "+[day3.getDate()] ;

                document.getElementById("date_n4").innerHTML = days[day4.getDay()]+". "+months[day4.getMonth()]+" "+[day4.getDate()] ;

                document.getElementById("date_n5").innerHTML = days[day5.getDay()]+". "+months[day5.getMonth()]+" "+[day5.getDate()] ;

                document.getElementById("date_n6").innerHTML = days[day6.getDay()]+". "+months[day6.getMonth()]+" "+[day6.getDate()] ;

                document.getElementById("date_n7").innerHTML = days[day7.getDay()]+". "+months[day7.getMonth()]+" "+[day7.getDate()] ;


                display_c();
        }

    }


   



        // {  //next 1 date...........

        //     function display_c(){
        //             var refresh=1000; // Refresh rate in milli seconds.............
        //             mytime=setTimeout('display_ct()',refresh)
        //     }
    
    
        //     function display_ct() {         
            
        //             var x = new Date();
        //             var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        //             var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        //             document.getElementById("date_ccc").innerHTML = days[x.getDay()]+". "+months[x.getMonth()]+" "+[x.getDate()] ;
    
        //             //document.getElementById("time_c").innerHTML = [x.getHours()]+":"+[x.getMinutes()]+":"+[x.getSeconds()] ;
    
    
        //             display_c();
        //     }
    
        // }





        