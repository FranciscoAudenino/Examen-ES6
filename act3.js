function tranformarNombres(str){
    const mapped = str.map(nom => nom.nombre.toUpperCase())
    return(mapped)
}

const personas = [ 
    { nombre: 'Juan', edad: 30 }, 
    { nombre: 'María', edad: 25 }, 
    { nombre: 'Pedro', edad: 35 } 
]; 

nombresEnMayusculas = tranformarNombres(personas)

console.log(nombresEnMayusculas)