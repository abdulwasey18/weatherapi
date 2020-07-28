const locationInput = document.getElementById("location");
const btnSubmit = document.getElementById("btnSubmit");
const temp = document.getElementById("temp");

btnSubmit.onclick = function() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=4af9e044737f83dd0831f27f696d9b41`

    fetch(url)
        .then(function(res) {

            res
                .json()
                .then(function(data) {
                    temp.innerText = data.weather[0].main
                    console.log(data);
                });
        })
        .catch(function(err) {
            console.log(err);
        })



}