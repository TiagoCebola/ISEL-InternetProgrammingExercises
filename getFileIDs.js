const fetch = require('node-fetch')
const fs = require('fs/promises')
const AC_ID = process.env.ATLAS_CLIENT_ID

function getBGAids(){
    return fetch(`https://api.boardgameatlas.com/api/search?limit=20&client_id=${AC_ID}`)
    .then(response => {
        console.log(`Status ${response.status}`) 
        return response.json()
    })
    .then( obj => obj.games)
    .then( g => g.map( info => info.id))
    .then( ids => fs.writeFile('BGA_IDs.txt', ids.map((id, idx) => {
                                                if(idx == 0) return `${id}`
                                                else return `\n${id}`})))
}
    
getBGAids()
    .then(obj => console.log("Done", obj))
    .catch(err => console.log("Error", err))


