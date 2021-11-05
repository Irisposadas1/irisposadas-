"uso estricto"
// recuperar los datos de las cajas de texto y la caja de selección
const  txtCuenta  =  documento . querySelector ( "#no_cuenta" ) ;
const  txtNombre  =  documento . querySelector ( "#nombre" ) ;
const  optCarrera  =  documento . querySelector ( "#carrera" ) ;
const  txtPromedio  =  documento . querySelector ( "#promedio" ) ;
const  btnGuardar  =  documento . querySelector ( "#btn_guardar" ) ;
// recuperar el cuerpo de la tabla
const  listaAlumnos  =  documento . querySelector ( "#lista_alumnos tbody" ) ;

btnGuardar . addEventListener ( "clic" ,  función  ( e )  {
    e . preventDefault ( ) ;
    // Generar un objeto de tipo alumno
    const  alumno  =  {
        nocuenta : txtCuenta . valor ,
        nombre : txtNombre . valor . toUpperCase ( ) ,
        carrera : optCarrera . valor . toUpperCase ( ) ,
        promedio : Número ( valor txtPromedio . )
    }
    // insertar dicho alumno a la tabla
    const  renglon  =  documento . createElement ( "tr" ) ;
    renglon . innerHTML  =  `
        <td>
            <img src = "img / $ { alumno . nocuenta } .png"
             alt = "" ancho = "100" alto = "100">
        </td>
        <td> $ { alumno . nocuenta } </td>
        <td> $ { alumno . nombre } </td>
        <td> $ { alumno . carrera } </td>
        <td> $ { alumno . promedio } </td>
    ` ;
    listaAlumnos . appendChild ( renglon ) ;
} )
