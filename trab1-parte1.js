// PARTE 1

// EXERCICIO 1

function filterProperties(propNames,obj) {

    return propNames.reduce( (oFiltered, property) => { 
                    if (obj.hasOwnProperty(property)) oFiltered[property] = obj[property]; 
                    return oFiltered; 
                } 
                ,{}
            );

    /*
    const fltobj = {}

    for(let i in obj){
        for(let e in propNames){
            if( i == propNames[e]) fltobj[i] = obj[i]
        }
    }

    return fltobj
*/
}

// EXERCICIO 2

function filterPropertiesN(propNames,objs){

    const fltobjN = []

    objs.map( objeto => { 
        fltobjN.push(filterProperties(propNames, objeto))
    })

    return fltobjN

}

module.exports = {filterProperties, filterPropertiesN}

// EXERCICIO 3

Array.prototype.zip = function (a, combiner){

    const newArray = []

    if(this.length <= a.length)
        this.map( (element, index) => newArray.push(combiner(element, a[index])))
    else 
        a.map( (element, index) => newArray.push(combiner(element, this[index])))

    return newArray

}