var sec=0
var min=0
var hr=0
var interval


function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    clearInterval(interval)
    watch()
    interval= setInterval(watch,1000)
}

function pause(){
    clearInterval(interval) 
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    window.alert("You've stopped at: "+document.getElementById('watch').innerText)
    document.getElementById('watch').innerText='00:00:00'

}

function watch(){
    sec++
    if(sec==60){
        sec=0
        min++        
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec);          
}

document.addEventListener("keydown", (e)=>{
    if(e.key =='l'){
        start()
        console.log("startou")
    }
})
document.addEventListener("keydown", (e)=>{
    if(e.key =='p'){
        pause()
        console.log("pausou")
    }
})
