// const path = require('path')
// const express = require('express')
// const request = require('request')
// const hbs = require('hbs')

// // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent('India')+'.json?access_token=pk.eyJ1Ijoic2FzaTE5OTgiLCJhIjoiY2twbTh5b3RlMDRodDJvcGdiM2FiZ2w0aSJ9.9xHAuMx1s7OWA2VScKIcHg'
// // //const url2 = 'http://api.weatherstack.com/current?access_key=351da2e6cc4b3f094f16def41eab18d2&query=11.1271,78.6569'
// // request({url:url,json:true},(error,response)=>{
// // if(error)
// // {
// //     console.log('error')
// // }
// // else{
// //     val = (response.body.features[0].center)
// //     const lon = val[0]
// //     const lat = val[1]
// //     const url2 = 'http://api.weatherstack.com/current?access_key=351da2e6cc4b3f094f16def41eab18d2&query='+lat+','+lon
// //     request({url:url2,json:true},(error,response)=>{
// //      console.log(response.body.current.temperature)
// //     })
// // }
// // })
// // const app = express()
// // const dir = path.join(__dirname,'../frontPage')
// // app.set('view engine','hbs')

// // app.get('',(req,res)=>
// // {
// //   res.render('index',{
// //     title:'dance monkey'
// //   })
// // })
// // app.listen(3000,()=>{
// //     console.log('server on')
// // })
// const app = express()
// const viewsPath = path.join(__dirname,'../Templates/views/Views')
// const partialPath = path.join(__dirname,'../Templates/views/Partial')
// app.set('view engine','hbs')
// app.set('views',viewsPath)
// hbs.registerPartials(partialPath)
// app.get('',(req,res)=>
// {
//   console.log(req.query.title)
//   res.render('index',{
//     title: req.query.title
//   })
// })
// app.listen(3000,()=>{
//   console.log('server ready')
// })
const request = require('request')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const Partialdir = path.join(__dirname,'../Templates/views/Partial')
hbs.registerPartials(Partialdir)
const viewDir = path.join(__dirname,'../Templates/views/Views')
app.set('view engine', 'hbs')
app.set('views', viewDir)
app.get('',(req,res)=>{
  loc = req.query.loc
  const geoLoc = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(loc)+'.json?access_token=pk.eyJ1Ijoic2FzaTE5OTgiLCJhIjoiY2twbTh5b3RlMDRodDJvcGdiM2FiZ2w0aSJ9.9xHAuMx1s7OWA2VScKIcHg'
const weather = 'http://api.weatherstack.com/current?access_key=351da2e6cc4b3f094f16def41eab18d2&query='+geoLoc
request({url:weather , json:true},(error,response)=>{
  weathers = response.body.current.temperature
  request({url:geoLoc , json:true},(error,response)=>{
  geLocks = response.body.features[0].center
  console.log(loc)
  console.log(weathers)
  res.render('index',{
    Temperature: weathers,
    Location : geLocks
  })
  })  
})
})
app.listen(3000,()=>{
  console.log('Port Started')
})