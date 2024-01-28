const operations = require('./trab1-parte1')

const props = ['b', 'd', 'g', 'a']

//TESTES PARA O EXERCICIO 1
const o = { a : 1 ,  b : 'Thor' ,  c : [ 1 , 2 , 3 ] ,  d : { x : 10 } ,  e : 2 ,  f : 'Capitão América' }

test('Returns a new object with the properties from obj whose names are present in props', 
  () => {
    expect(operations.filterProperties(props, o))
    .toEqual({ a: 1, b: 'Thor', d: { x: 10 } })
    })

      
//TESTES PARA O EXERCICIO 2
const objs = [{ a : 1 ,  b : 'Thor' ,  c : [ 1 , 2 , 3 ] ,  d : { x : 10 } ,  e : 2 ,  f : 'Capitão América' } , 
{ b : 'Hulk ' ,  a : [ 1 , 2 , 3 ] ,  d : {x : 10 } ,  e : 2 ,  g : false } ,  
{ x : 'Visão' ,  y : false }]

test('Returns a new object array with objects produced by applying the filterProperties function with propNames to each object in objs',
 () => { const retur = operations.filterPropertiesN(props, objs)
        expect(retur).toEqual([
                        {a: 1, b: "Thor", d: {x: 10}}, 
                        {a: [1, 2, 3], b: "Hulk ", d: {x: 10}, g: false}, 
                        {}
                      ])})


//TESTES PARA O EXERCICIO 3
test('Sum of two arrays of the same size', 
  () => { const retur = [1, 2, 3].zip([4, 5, 6],  function(left, right) { return left + right})
    expect(retur).toEqual([5, 7, 9])
})

test('Sum of two arrays with different size - Last Bigger', 
  () => { const retur = [1, 2, 3].zip([4, 5, 6, 7, 8] ,  function ( left ,  right )  {  return  left  +  right } )
    expect(retur).toEqual([5,7,9])
})

test('Sum of two arrays with different size - First Bigger', 
  () => { const retur = [1, 2, 3].zip([4, 5] ,  function ( left ,  right )  {  return  left  +  right } )
    expect(retur).toEqual([5, 7])
})

test('Sum of two arrays where one is Empty', 
  () => { const retur = [1, 2, 3].zip([] ,  function ( left ,  right )  {  return  left  +  right } )
    expect(retur).toEqual([])
})