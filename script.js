function adanTime() {


    let city = document.getElementById("city").value

    axios.get(`http://api.aladhan.com/v1/calendarByCity?country=MA&&city=${city}`)
    .then((response)=>{
        let data = response.data

        for (ele in data.data) {
            document.getElementById("show").innerHTML+= `
            
            <div>
                    <p class="dayDate" >${response.data.data[ele].date.gregorian.date}</p>
                    <p>Fajr <span>${response.data.data[ele].timings.Fajr}</span> </p>
                    <p>Choroq <span>${response.data.data[ele].timings.Sunrise}</span> </p>
                    <p>Dohr <span>${response.data.data[ele].timings.Dhuhr}</span> </p>
                    <p>Asr <span>${response.data.data[ele].timings.Asr}</span> </p>
                    <p>Sunset <span>${response.data.data[ele].timings.Sunset}</span> </p>
                    <p>Ichaa <span>${response.data.data[ele].timings.Maghrib}</span> </p>
                    </div>
            `
        }
    })


}


document.getElementById("btn").addEventListener("click",adanTime)

