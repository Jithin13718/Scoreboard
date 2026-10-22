let home_count = 0
let guest_count = 0
let homeEl = document.getElementById("score_home")
let guestEl = document.getElementById("score_guest")

function plusone(team){
    if(team === "home"){
        home_count++
        homeEl.textContent = home_count
    }else if(team === "guest"){
        guest_count++
        guestEl.textContent = guest_count
    }
}
function plustwo(team){
    if(team === "home"){
        home_count+=2
        homeEl.textContent = home_count
    }else if(team === "guest"){
        guest_count+=2
        guestEl.textContent = guest_count
    }
}
function plusthree(team){
    if(team === "home"){
        home_count+=3
        homeEl.textContent = home_count
    }else if(team === "guest"){
        guest_count+=3
        guestEl.textContent = guest_count
    }
}