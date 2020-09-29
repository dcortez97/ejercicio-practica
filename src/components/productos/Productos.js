import React, { useContext, useEffect } from 'react'
import ProductoContext from '../../context/productos/ProductoContext'
//MATERIAL UI
import {CssBaseline, Container, Grid, Paper} from '@material-ui/core'
import { useStylesList } from './productsStyles';
import FormProductos from './FormProductos';
import ListadoProductos from './ListadoProductos';


const Productos = () => {

    const classes = useStylesList();

    const productoContext = useContext(ProductoContext)
    const {obtenerProductos, productos} = productoContext

    useEffect(() => {
        obtenerProductos()
        // eslint-disable-next-line
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <Paper className={classes.papertable}>
                                    <h2>Añadir orden numero : {productos.length + 1}</h2>
                                    <FormProductos />   
                                </Paper>
                            </Grid>                                
                            <Grid item xs={12}>
                                <Paper className={classes.papertable}>
                                    <ListadoProductos />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
            </main>
        </div>
    )
}

export default Productos
