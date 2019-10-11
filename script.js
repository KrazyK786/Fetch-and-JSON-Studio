// TODO: add code here
function init(){
    // console.log("test");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            json.sort(function(a,b){
                return b.hoursInSpace - a.hoursInSpace;
            });
            let body = document.querySelector("body");
            let title = document.querySelector("h1");
            let numberAstro = document.createTextNode(json.length) ;
            // body.insertBefore(numberAstro,title);
            title.innerHTML = json.length + " " + title.textContent;
            // console.log(numberAstro);

            const container = document.getElementById("container");
            // let astroSorted = [];
            // for (let j = 0;j < json.length;j++){
            //     let astroTime = json[j].hoursInSpace;
            //     let nextAstroTime = json[j+1].hoursInSpace;
            //     if (astroTime>nextAstroTime)
            //     console.log(astroTime);

            // }

            for (let i = 0;i < json.length; i++){
                jsonObj = json[i];
                let astroDiv =`
                <div class="astronaut" >
                    <div class="bio">
                        <h3>${jsonObj.firstName}</h3>
                            <ul>
                                <li>Hours in Space: ${jsonObj.hoursInSpace}</li>
                                <li id="active">Active: ${jsonObj.active}</li>
                                <li>Skills: ${jsonObj.skills}</li>
                            </ul>
                    </div>
                    <img class="avatar" src=${jsonObj.picture} />
                </div>
                `;
                container.innerHTML += astroDiv;
            }
            let listEle = document.getElementsByTagName("li");
            console.log(listEle[5].textContent);
            for (let j = 0; j < listEle.length; j++){
                if (listEle[j].textContent === "Active: true"){
                    // let listEle = document.getElementById("active");
                    listEle[j].setAttribute("class","green");
                }

            }

        });
    });
}

window.onload = init;