import { AGREGAR_PRODUCTO, MOSTRAR_ERROR_PRODUCTO, OBTENER_DETALLE_PRODUCTO, OBTENER_PRODUCTOS } from "../../types";


export default (state, action) => {
    switch (action.type) {
        
        case OBTENER_PRODUCTOS: 
            return{
                ...state, 
                productos: action.payload
            }

        case AGREGAR_PRODUCTO:
            return{
                ...state,
                productos: [action.payload, ...state.productos ]
            }

        case MOSTRAR_ERROR_PRODUCTO:
            return{
                ...state,
                errorform: [...state.errorform, action.payload],
            }

        case OBTENER_DETALLE_PRODUCTO:
            return{
                ...state,
                productoseleccionado: action.payload
            }
        
    
        default:
            return state;
    }
}

