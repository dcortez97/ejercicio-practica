import React, { useContext, useEffect } from 'react'
import ProductoContext from '../../context/productos/ProductoContext'
//MATERIAL UI
import {CssBaseline, Container, Grid, Paper, Button, FormControl} from '@material-ui/core'
import { useStylesList } from './detallesStyles';
import PaymentIcon from '@material-ui/icons/Payment';
import Swal from 'sweetalert2'


const Detalles = () => {

    const classes = useStylesList();

    const productoContext = useContext(ProductoContext)
    const {obtenerProductos, productoseleccionado} = productoContext

    useEffect(() => {
        obtenerProductos()
        // eslint-disable-next-line
    }, [])

   if (!productoseleccionado) {
       return null
   }

   const onClickPagar = () => {
        Swal.fire({
            title: 'Felicitaciones!',
            text: 'Pago Realizado Exitosamente',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        })
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={6} >
                                <Paper className={classes.papertable}>
                                    <h3>Imagen del producto</h3>
                                    <img src="/backdrop.jpg" className={classes.img} alt={`${productoseleccionado.name}`}>
                                    </img>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} >
                                <Paper className={classes.papertable}>
                                    <h3 className={classes.h3}>Nombre: <span className={classes.span}>{productoseleccionado.name}</span> </h3>

                                    <h3 className={classes.h3}>Cantidad:  <span className={classes.span}>{productoseleccionado.quantity}</span></h3>

                                    <h3 className={classes.h3}>Precio $ <span className={classes.span}>{productoseleccionado.price}</span></h3>
                                </Paper>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Paper className={classes.papertable}>
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
                                </Paper>
                            </Grid>
                        </Grid>
                        
                    </Container>
            </main>

        </div>
    )
}

export default Detalles
