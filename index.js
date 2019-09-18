const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const fetch = require('node-fetch')
const sortJsonArray = require('sort-json-array')

const app = express()

app.use(bodyParser.json())

app.get('/', async (req, res)=>{
    
   const f = aaa()

})



async function aaa(){
    try{
    const api_url = `https://api.github.com/users/takenet/repos`
    const response = await fetch(api_url)
    const json = await response.json();
    const resultado = await sortJsonArray(json, 'language' === 'C#', 'asc')




    let completo = []
    // console.log(resultado[2].language)
    console.log(resultado.length)
    for (let lista = 0; lista < resultado.length; lista ++){
        if (resultado[lista].language === "C#" ){
            completo.push([
                resultado[lista]
            ]
            )
            // console.log(completo)
        }else{
            console.log("N")
        }
        

    }
    console.log(completo)
    return completo
}
    catch(e){
        console.log(e)
    }
}

const PORT = 3000;
const HOST = '0.0.0.0'
app.listen(PORT, HOST);
console.log(`Server running on http://${HOST}:${PORT}`);