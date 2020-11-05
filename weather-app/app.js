const ultis = require('./ultis');
const yargs = require('yargs');


ultis.geoCode(yargs.argv._[0], (error, coord)=> {
    if(error) {
        console.log(error);
    }else{
            console.log(coord)
            ultis.weather(coord,  (error, data)=> {
            if(error) {
                console.log(error)
            }else{
                console.log(data);
            }
        })
    }
})
