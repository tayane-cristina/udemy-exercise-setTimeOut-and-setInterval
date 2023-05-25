const showTime = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}
//console.log(showTime())

const time = setInterval(function () {
    console.log(showTime())
}, 1000)

setTimeout(function (){
    clearInterval(time)
}, 5000)




