const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_val = document.getElementById('temp_val');
const dataHide = document.querySelector('.data_hide');


const getInfo =async (event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    //console.log(cityVal)
    if(cityVal == ""){
       city_name.innerText = `please write the name before search`;
       dataHide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=df1c197c62b9cf44ee723ffc6aefb867`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log(arrData);
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_val.innerText = (parseInt(arrData[0].main.temp)-272);
            //console.log((parseInt(arrData[0].main.temp)-272).toFixed(2))
            temp_status.innerText = arrData[0].weather[0].main;
            dataHide.classList.remove('data_hide');

            const mode = arrData[0].weather[0].main;
            if(mode == 'Clear'){
                temp_status.innerHTML = '<i class = "fas fa-sun" style="color: #eccc68;"></i>';
            }else if(mode == 'Clouds'){
                temp_status.innerHTML = '<i class = "fas fa-cloud" style="color: #1f2f6;"></i>';
            }else if(mode == 'Rain'){
                temp_status.innerHTML = '<i class = "fas fa-rain" style="color: #a4b0be;"></i>';
            }else {
                temp_status.innerHTML = '<i class = "fas fa-sun" style="color: #eccc68;"></i>';
            }

        }catch{
            city_name.innerText = `please enter the city name properly`;
            dataHide.classList.add('data_hide');
        }
        
    }
   
}

submitBtn.addEventListener('click',getInfo);