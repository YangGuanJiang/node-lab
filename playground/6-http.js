const http =require("http")
const url = 'http://api.weatherstack.com/current?access_key=48fac681035a120d7a4ec513394d5e46&query=New%20York'
const request = http.request(url,(response ) => {
    let data = '';
    response.on('data',(chunk)=>{
        data = data + chunk.toString();
        console.log(data)
    })
    response.on('end',()=> {
        const body = JSON.parse(data)
        console.log(body)
    })

})
request.on(' error',(error)=>{ console. log(' An error', error)
})
request.end()
