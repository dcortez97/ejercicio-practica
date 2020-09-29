import React, { useContext } from 'react'
//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'
import {FormControl, Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import PaymentIcon from '@material-ui/icons/Payment';
import {blue } from '@material-ui/core/colors';
import ProductoContext from '../../context/productos/ProductoContext';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});


const ListadoProductos = () => {
    const classes = useStyles();

    const productoContext = useContext(ProductoContext)
    const {productos, obtenerDetalleProducto} = productoContext

    const onClickPagar = () => {
        Swal.fire({
            title: 'Felicitaciones!',
            text: 'Pago Realizado Exitosamente',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
    }

    const productoSeleccionado = producto => {
        obtenerDetalleProducto(producto)
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className={classes.head}>
                    <TableRow>
                        <TableCell>Sku</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Ver Detalles</TableCell>
                        <TableCell align="center">Pagar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productos.map((producto) => (
                        <TableRow key={producto.sku}>
                            <TableCell component="th" scope="row">
                                {producto.sku}
                            </TableCell>
                            <TableCell align="center">{producto.name}</TableCell>
                            <TableCell align="center">{producto.quantity}</TableCell>
                            <TableCell align="center">{producto.price}</TableCell>
                            <TableCell align="center">
                                <Link to="/detalles/">
                                    <EditIcon 
                                        style={{ color: blue[700] }}
                                        onClick={() => productoSeleccionado(producto)}
                                    />
                                </Link>
                                
                            </TableCell>
                            <TableCell align="center">
                            <FormControl className={classes.formControl}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={< PaymentIcon />}
                                    onClick={() => onClickPagar()}
                                >
                                    Pagar
                                </Button>
                            </FormControl>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ListadoProductos
