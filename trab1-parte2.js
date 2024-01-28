const fetch = require('node-fetch')
const fs = require('fs/promises')
const AC_ID = process.env.ATLAS_CLIENT_ID

function fetchBGAPromises() {

    fs.readFile("BGA_IDs.txt")
        .then(ids => {
            const promises = ids.toString().split('\n')
            .map(id => `https://api.boardgameatlas.com/api/search?ids=${id}&client_id=${AC_ID}`)
            .map(request => {
                return fetch(request)
                    .then(response => response.json())
            })
            return Promise.all(promises)
        })
        .catch(err => console.log("Erro", err))
        .then(results => {
            return results
                .map(obj => obj.games[0])
                .map(info => { return {name: info.name, url: info.url} })
        })
        .then( data_result => fs.writeFile('BGA_Games_Info_Promises.txt', JSON.stringify(data_result, null, '\t')))
        .catch(err => console.log("Erro", err))

}
fetchBGAPromises()


/*
async function fetchBGAAsyncAwait() {

    const ids = await fs.readFile("BGA_IDs.txt")
    const promises = ids.toString().split('\n')
        .map(id => `https://api.boardgameatlas.com/api/search?ids=${id}&client_id=${AC_ID}`)
        .map(async request => {
            const promise = await fetch(request)
            const gson = await promise.json()
            return gson
        })
    const data = await Promise.all(promises)
    const results = data
        .map(obj => obj.games[0])
        .map(info => { return {name: info.name, url: info.url} })
    await fs.writeFile('BGA_Games_Info_AsyncAwait.txt', JSON.stringify(results, null, '\t'))

}
fetchBGAAsyncAwait()
    .then(() => console.log("DONE"))
    .catch(err => console.log("Error",err))
*/