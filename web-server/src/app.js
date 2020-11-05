const path = require('path');
const express = require('express');
const hbs = require('hbs');
const ultis = require('./ultis');

const app = express();
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get('' , (req, res, next) => {
    res.render(viewsPath+'/index',{
        title: 'Weather App'
    });
});
app.get('/about' , (req, res, next) => {
    res.render(viewsPath+'/about',{
        title: 'About'
    });
});
app.get('/help' , (req, res, next) => {
    res.render(viewsPath+'/help',{
        title: 'Help',
        helpMsg: 'MSG'
    });
});
app.get('/weather' , (req, res, next) => {
    if(!req.query.address) {
        res.send({
            error: "you must provide a location term"
        })
    }else {
        ultis.geoCode(req.query.address, (error, coord)=> {
            if(error) {
                res.send(error);
            }else{
                ultis.weather(coord,  (error, data)=> {
                    if(error) {
                        res.send(error)
                    }else{
                        res.send({data, coord});
                    }
                })
            }
        })
    }

});
app.get('/products' , (req, res, next) => {
    if(!req.query.search) {
        res.send({
            error: "you must provide a search term"
        })
    }else {
        res.send({
            title: 'products',
            products: []
        });
    }

});
app.get('/help/*', (req, res, next) => {
    res.send('<h1>help article not found</h1>');
});
app.get('*', (req, res, next) => {
    res.send('<h1>404 Page</h1>');
});

app.listen('3001', ()=>{
    console.log('server started, on port 3001')
})
