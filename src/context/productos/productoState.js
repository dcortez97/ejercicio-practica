import React, { useReducer } from 'react';
import ProductoContext from './ProductoContext';
import productoReducer from './productoReducer';
import tokenAuth from '../../config/tokenAuth'
import clienteAxios from '../../config/axios';
import { OBTENER_PRODUCTOS, AGREGAR_PRODUCTO, MOSTRAR_ERROR_PRODUCTO, OBTENER_DETALLE_PRODUCTO } from '../../types';
import Swal from 'sweetalert2'

const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkM2NIVUVibVJoc1EzeXhNbzV2VnliSTFzaDZCSDJZRCIsImlhdCI6MTU4NTkzMjYzNDU0OH0.tMSht_M3ryQl5IqCirhYR1gb8j3FQ26vILT4Qpx4XrdFz-zUmqbgFYiKTaZHPpB85etRIMhxVoZf6tOrHy0fnA'

const listadoProductos = [
    {sku: 1, name: 'Producto 1', quantity: 3, price: 128.94, state: false},
    {sku: 2, name: 'Producto 2', quantity: 6, price: 23.94, state: false},
    {sku: 3, name: 'Producto 3', quantity: 5, price: 34.94, state: false},
    {sku: 4, name: 'Producto 4', quantity: 7, price: 228.94, state: false},
    {sku: 5, name: 'Producto 5', quantity: 8, price: 233.94, state: false},
    {sku: 6, name: 'Producto 6', quantity: 1, price: 68.94, state: false},
    {sku: 7, name: 'Producto 7', quantity: 3, price: 48.94, state: false},
    {sku: 8, name: 'Producto 8', quantity: 99, price: 118.94, state: false},
    {sku: 9, name: 'Producto 9', quantity: 12, price: 222.94, state: false},
    {sku: 10, name: 'Producto 10', quantity: 10, price: 348.94, state: false},
    {sku: 11, name: 'Producto 11', quantity: 5, price: 10.94, state: false}
]

const ProductoState = props => {

    const initialState = {
        productos: [],
        errorform: [],
        productoseleccionado: null
    }

    const [state, dispatch] = useReducer(productoReducer, initialState)

    const obtenerProductos = async () => {
        tokenAuth(token)
        dispatch({
            type: OBTENER_PRODUCTOS,
            payload: listadoProductos
        })
        // try {
        //     const resultado = await clienteAxios.get('/api/v2/orders4')
        //     // dispatch({
        //     //     type: OBTENER_PRODUCTOS,
        //     //     payload: listadoProductos
        //     // })
        // } catch (error) {
        //     console.log(error)
        // }
    }

    const agregarProducto = async producto => {
        // catalogue.id = uuidv4();
        dispatch({
            type: AGREGAR_PRODUCTO,
            payload: producto
        })
        Swal.fire({
            title: 'Correcto!',
            text: 'Producto Agregado Exitosamente',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
    }

    const mostrarErrorForm = (error) => {
        dispatch({
            type: MOSTRAR_ERROR_PRODUCTO,
            payload: error
        })
    }

    const obtenerDetalleProducto = detalle => {
        dispatch({
            type: OBTENER_DETALLE_PRODUCTO,
            payload: detalle
        })
    }
    
    return (
        <ProductoContext.Provider
            value={{
                productos: state.productos,
                errorform: state.errorform,
                productoseleccionado: state.productoseleccionado,
                obtenerProductos,
                agregarProducto,
                mostrarErrorForm,
                obtenerDetalleProducto
            }}
        >
            {props.children}
        </ProductoContext.Provider>
    )
}

export default ProductoState