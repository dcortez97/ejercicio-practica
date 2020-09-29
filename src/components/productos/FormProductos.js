import React, { useContext, useState } from 'react'

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import {FormControl, TextField, Button} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import ProductoContext from '../../context/productos/ProductoContext';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200
    },
}));


const FormProductos = () => {

    const classes = useStyles();

    const [producto, guardarProducto] = useState({
        sku: '',
        name: '',
        quantity: '',
        price: ''
    })

    const {sku, name, quantity, price} = producto

    const productoContext = useContext(ProductoContext)
    const {errorform, agregarProducto, mostrarErrorForm} = productoContext;


    const onChangeProduct = e => {
        guardarProducto({
            ...producto, 
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProducto = e => {
        e.preventDefault();

        let contador = 0;
        if (sku.trim() === '') {
            mostrarErrorForm('sku')
            contador++;
        }  

        if (name.trim() === '') {
            mostrarErrorForm('name')
            contador++;
        }  

        if (quantity.trim() === '') {
            mostrarErrorForm('quantity')
            contador++;
        }  
        if (price.trim() === '') {
            mostrarErrorForm('price')
            contador++;
        }

        
        if (contador > 0) {
            return   
        }
        agregarProducto(producto)

        guardarProducto({
            sku: '',
            name: '',
            quantity: '',
            price: ''
        })
    }

    return (
        <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmitProducto}>
            <FormControl className={classes.formControl}>
                <TextField
                    error={errorform.includes('sku') ? 'true' : ''}
                    helperText={errorform.includes('sku') ? 'Campo Requerido' : ''}
                    type="text" 
                    name="sku" 
                    id="sku" 
                    placeholder="Ejemplo: 1234" 
                    onChange={onChangeProduct} 
                    value={sku}
                    label="Sku" 
                    variant="outlined"
                    size="small"
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    error={errorform.includes('name') ? 'true' : ''}
                    helperText={errorform.includes('name') ? 'Campo Requerido' : ''}
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Ejemplo: Laptop" 
                    onChange={onChangeProduct} 
                    value={name}
                    label="Nombre Producto" 
                    variant="outlined"
                    size="small"
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    error={errorform.includes('quantity') ? 'true' : ''}
                    helperText={errorform.includes('quantity') ? 'Campo Requerido' : ''}
                    type="number" 
                    name="quantity" 
                    id="quantity" 
                    placeholder="Ejemplo: 12" 
                    onChange={onChangeProduct} 
                    value={quantity}
                    label="Cantidad Producto" 
                    variant="outlined"
                    size="small"
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    error={errorform.includes('price') ? 'true' : ''}
                    helperText={errorform.includes('price') ? 'Campo Requerido' : ''}
                    type="text" 
                    name="price" 
                    id="price" 
                    placeholder="Ejemplo: 2084.93" 
                    onChange={onChangeProduct} 
                    value={price}
                    label="Precio de Producto" 
                    variant="outlined" 
                    size="small"
                    
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={< SaveIcon />}
                >
                    Agregar Producto
                </Button>
            </FormControl>
        </form>
    )
}

export default FormProductos
