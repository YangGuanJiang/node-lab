const _URLWeather =  'http://api.weatherstack.com/';
const _ACCESS_KEY = '48fac681035a120d7a4ec513394d5e46';
const _URLMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const _ACCESS_TOKEN = "pk.eyJ1IjoiZGFodW9jaGUiLCJhIjoiY2tmdWYwbHB2MGlzYTMwcDlvOGNjYW1iMyJ9.ieH4IFva9rpYqJHcysqULQ"
const axios = require('axios');

const weather = (coordinates , callback) => {
    axios({
        url: 'current',
        method: 'get',
        baseURL: _URLWeather,
        params: {
            access_key: _ACCESS_KEY,
            query: coordinates.latitude + ',' + coordinates.longitude
        }
    }).then(({data}) => {
        // const data = response.data;
        if (data.error) {
            callback(data.error);
        } else {
            callback(undefined, data.current)
        }
    }).catch((error) => {
        callback(error);
    })
}

const geoCode = (addr , callback) => {
    axios({
        url: _URLMapbox + encodeURIComponent(addr) + '.json',
        method: 'get',
        params: {
            access_token: _ACCESS_TOKEN,
            limit: 1
        }
    }).then((response)=>{
        const feature = response.data.features[0];
        if(!feature) {
            callback('no data from mapbox');
        }else{
            callback(undefined, {
                latitude: feature.center[1],
                longitude: feature.center[0],
                location: feature.place_name
            })

        }
    }).catch((error) => {
        callback(error);
    })
}
