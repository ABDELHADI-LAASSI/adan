function adanTime() {


    let city = document.getElementById("city").value

    axios.get(`http://api.aladhan.com/v1/calendarByCity?country=MA&&city=${city}`)
    .then((response)=>{
        let data = response.data
        console.log(data)
        document.getElementById("show").innerHTML= ""
        for (ele in data.data) {
            document.getElementById("show").innerHTML+= `
            <div class="kharab">
                    <p class="dayDate" >${response.data.data[ele].date.gregorian.date}</p>
                    <div class="timesContainer">
                        <div> <p>  Fajr    </p> <p>${response.data.data[ele].timings.Fajr.split(' ')[0]}  </p>  </div> 
                        <div> <p>  Choroq  </p> <p>${response.data.data[ele].timings.Sunrise.split(' ')[0]}  </p>  </div> 
                        <div> <p>  Dohr    </p> <p>${response.data.data[ele].timings.Dhuhr.split(' ')[0]}  </p>  </div> 
                        <div> <p>  Asr     </p> <p>${response.data.data[ele].timings.Asr.split(' ')[0]}  </p>  </div> 
                        <div> <p>  Sunset  </p> <p>${response.data.data[ele].timings.Sunset.split(' ')[0]}  </p>  </div> 
                        <div> <p>  Ichaa   </p> <p>${response.data.data[ele].timings.Maghrib.split(' ')[0]}  </p>  </div> 
                    </div>
            </div>
            `
        }
    })
}
document.getElementById("btn").addEventListener("click",adanTime)

