let time = 0
setInterval(() =>{
    time++
    document.body.innerHTML = time
if(time ==  555){
    document.body.innerHTML = "stop"
}
}, 1000)