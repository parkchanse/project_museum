fetch('https://goweather.herokuapp.com/weather/{city}')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    // console.log(data.forecast)
    // console.log(data.forecast[0])
    // console.log(data.forecast[0].day, data.forecast[0].temperature)

    const temperature = data.forecast[0].temperature
    const wind = data.forecast[0].wind
    
    document.querySelector('.temperature').innerHTML = `
        ${temperature}
    `
    document.querySelector('.wind').innerHTML = `
        ${wind}
    `

  })


fetch('http://localhost:8080/about')
.then((response) => response.json())
.then((data) => {
    console.log(data)
    console.log(data.list[0].imgUri)
    console.log(data.list[0].nameKr)
    console.log(data.list[0].name)
    console.log(data.list[0].museumName2)
    console.log(data.list[0].sizeInfo)
    console.log(data.list[0].desc)

    const museumimg = data.list[0].imgUri
    const museumnameKr = data.list[0].nameKr
    const museumname = data.list[0].name
    const museumName2 = data.list[0].museumName2
    const museumsizeInfo= data.list[0].sizeInfo
    const museumdesc = data.list[0].desc

    document.querySelector('.exhibition_inner_right').innerHTML = `
        <img src="${museumimg}" alt = "이미지" heigh = "600px" width="400vw"> 
    `
    document.querySelector('.title').innerHTML = `${museumnameKr}`
    document.querySelector('.title_sub').innerHTML = `${museumname}`
    document.querySelector('.inner1').innerHTML = `<strong>주관</strong>  :  ${museumName2}`
    document.querySelector('.inner2').innerHTML = `<strong>전시사이즈</strong> :  ${museumsizeInfo}`
    document.querySelector('.inner3').innerHTML = `<strong>전시요약 </strong> : ${museumdesc}`
})