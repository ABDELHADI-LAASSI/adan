function nav(){
    let navBarIcon = document.getElementById("bar");
    let navAll = document.getElementById("navAll");


    navBarIcon.onclick = function() {
        if(navAll.style.display == "none") {
            navAll.style.display = "block"
        } else {
            navAll.style.display = "none";
        }
    }
}
nav()

function adanTime() {


    let city = document.getElementById("city").value

    fetch(`https://api.aladhan.com/v1/calendarByCity?country=MA&&city=${city}`)
    .then((response) => response.json())
    .then((json) => {
        let data = json
        console.log(json.data[1].date.gregorian.date)
        document.getElementById("show").innerHTML= ""
        for (ele in data.data) {
            document.getElementById("show").innerHTML+= `
            <div class="kharab">
                    <p class="dayDate" >${json.data[ele].date.gregorian.date}</p>
                    <div class="timesContainer">
                        <div> <p>  Fajr    </p> <p>${json.data[ele].timings.Fajr.split(' ')[0]}  </p>  </div> 
                        <div> <p>  Choroq  </p> <p>${json.data[ele].timings.Sunrise.split(' ')[0]}  </p>  </div> 
                        <div> <p>  Dohr    </p> <p>${json.data[ele].timings.Dhuhr.split(' ')[0]}  </p>  </div> 
                        <div> <p>  Asr     </p> <p>${json.data[ele].timings.Asr.split(' ')[0]}  </p>  </div> 
                        <div> <p>  Sunset  </p> <p>${json.data[ele].timings.Sunset.split(' ')[0]}  </p>  </div> 
                        <div> <p>  Ichaa   </p> <p>${json.data[ele].timings.Maghrib.split(' ')[0]}  </p>  </div> 
                    </div>
            </div>
            `
        }
    });

    // axios.get(`https://api.aladhan.com/v1/calendarByCity?country=MA&&city=${city}`)
    // .then((response)=>{
    //     let data = response.data
    //     console.log(data)
    //     document.getElementById("show").innerHTML= ""
    //     for (ele in data.data) {
    //         document.getElementById("show").innerHTML+= `
    //         <div class="kharab">
    //                 <p class="dayDate" >${response.data.data[ele].date.gregorian.date}</p>
    //                 <div class="timesContainer">
    //                     <div> <p>  Fajr    </p> <p>${response.data.data[ele].timings.Fajr.split(' ')[0]}  </p>  </div> 
    //                     <div> <p>  Choroq  </p> <p>${response.data.data[ele].timings.Sunrise.split(' ')[0]}  </p>  </div> 
    //                     <div> <p>  Dohr    </p> <p>${response.data.data[ele].timings.Dhuhr.split(' ')[0]}  </p>  </div> 
    //                     <div> <p>  Asr     </p> <p>${response.data.data[ele].timings.Asr.split(' ')[0]}  </p>  </div> 
    //                     <div> <p>  Sunset  </p> <p>${response.data.data[ele].timings.Sunset.split(' ')[0]}  </p>  </div> 
    //                     <div> <p>  Ichaa   </p> <p>${response.data.data[ele].timings.Maghrib.split(' ')[0]}  </p>  </div> 
    //                 </div>
    //         </div>
    //         `
    //     }
    // })
}
document.getElementById("btn").addEventListener("click",adanTime)

