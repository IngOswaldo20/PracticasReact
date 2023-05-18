function Arreglo(props) {
    // Ordena el arreglo recibido como prop
    const arregloOrdenado = props.arreglo.sort();
  
    // Convierte el arreglo ordenado en una cadena de texto
    const cadenaArreglo = arregloOrdenado.join(', ');
  
    // Muestra la cadena de texto con el arreglo ordenado
    return <h3>Arreglo ordenado: {cadenaArreglo}</h3>;
  }
  
  export default Arreglo;
  