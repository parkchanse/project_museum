const express =require('express')
const app = express()
const port = process.env.PORT || 8080
const  cors = require('cors')
const axios = require("axios")
const { response } = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

var corsOpations = {
  origin: '*',
  Credential: true
}


app.use(express.static(__dirname + '/'))
app.use(cors(corsOpations))

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html')
})

app.get('/artifact', (req,res) => {
  res.sendFile(__filename + '/html/artifact.html')

  res.header("Access-Control-Allow-Origin", "http://localhost:8080/html/artifact.html");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
})

app.get('/about', async (req, res) => {
  var museumurl = 'http://www.emuseum.go.kr/openapi/relic/detail'; /*URL*/
  var queryParams = '?' + encodeURIComponent('serviceKey') + '='+ encodeURIComponent('65e36232-b18d-43d7-ba34-a15923793c28'); 
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); 
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); 
  queryParams += '&' + encodeURIComponent('id') + '=' + encodeURIComponent('PS0100100100100240600000'); 
  queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); 

  const url = museumurl + queryParams;

  console.log(url)
  console.log("공공데이터 서비스키: ", encodeURIComponent('65e36232-b18d-43d7-ba34-a15923793c28'))

  const key = 'BdqLC%2BLi2%2FkjGiJ%2B0RZayHvzxVRR66pzWTKilU4snVT9GmrrpECZvr%2FM4okxE4ldv5Ay3CzjR1kxfDRxpdmnug%3D%3D'
  console.log("키: ", key)

  try {
      const result = await axios.get(`http://www.emuseum.go.kr/openapi/relic/detail?serviceKey=${key}&id=PS0100100101101235600000`)
      res.json(result.data)
  } catch (error) {
      console.log(error)
  }
})

app.use(
  createProxyMiddleware('/weather', {
    target: "https://goweather.herokuapp.com/weather/Curitiba",
    changeOrigin: true
  })
)


app.use('404', (req, res, next) => {
  res.status(404).send("sorry can't find page")
})

app.use('500', (err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send("something is broken on server !")
})

app.listen(port, () => {
  console.log(`listening on 8080... ${port}`)
})