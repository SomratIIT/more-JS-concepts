function interval()
{  
    console.log(`Hello`)
}

let intervalId = setInterval(interval,1000);

setTimeout(function(){
    clearInterval(intervalId);
    console.log('Kaj shes')
},6000)