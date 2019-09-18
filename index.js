const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const fetch = require('node-fetch')
const sortJsonArray = require('sort-json-array')

const app = express()

app.use(bodyParser.json())

app.get('/:repo', async (req, res)=>{
    let repo = req.params.repo;

    const api_url = `https://api.github.com/users/takenet/repos`
    const response = await fetch(api_url)
    const json = await response.json();
    let resultado = await sortJsonArray(json, 'created_at', 'asc')

    let completo = []

    for (let lista = 0; lista < resultado.length; lista ++){
        if (resultado[lista].language === "C#" ){
            completo.push(
                resultado[lista]
            
            )
            // console.log(completo)
        }
        

    }
   
    console.log(completo[0].description, completo[0].language,completo[0].created_at)
    console.log(completo[1].description, completo[1].language,completo[1].created_at)
    console.log(completo[2].description, completo[2].language,completo[2].created_at)
    console.log(completo[3].description, completo[3].language,completo[3].created_at)
    console.log(completo[4].description, completo[4].language,completo[4].created_at)
    res.send(completo[repo])


})







app.listen(process.env.PORT || 3000);
console.log(`Server running on 3000`);
