const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const fetch = require('node-fetch')
const sortJsonArray = require('sort-json-array')

const app = express()

app.use(bodyParser.json())

app.get('/', async (req, res)=>{
    
   const f = aaa()
    // console.log(completo)

})

var order = function(){

}

async function aaa(){
    var final = []
    try{
    const api_url = `https://api.github.com/users/takenet/repos`
    const response = await fetch(api_url)
    const json = await response.json().then((json)=>{
        console.log(json.length)
        for (let lista = 0; lista < json.length; lista ++){
            console.log(json[lista].language);
            if(json[lista].language === "C#"){
                console.log("AQUI FOI")
                final.push(json[lista])
            }
        }
    }).then((final) =>{
        console.log(final)
    })
}
    catch(e){
        console.log(e)
    }
}

const PORT = 3000;
const HOST = '0.0.0.0'
app.listen(PORT, HOST);
console.log(`Server running on http://${HOST}:${PORT}`);