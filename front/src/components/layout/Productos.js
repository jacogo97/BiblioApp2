import React, { Component } from 'react'
import axios from 'axios'

export default class Productos extends Component {

    state = {
        productos: []
    }

    async componentDidMount() {
        this.getProductos();
    }

    getProductos = async () => {
        const rest = await axios.get('http://localhost:3000/productos');
        this.setState({ productos: rest.data });
    }

    render() {
        return (
            <div className='row-center'>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='col-md6'>
                    <h1>LISTA DE PRODUCTOS</h1>
                </div>

                <div className='col-md-10'>
                    <ul className='list-group'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {
                            this.state.productos.map(producto => (


                                <li
                                    className="list-group-item list-group-item-action"
                                    key={producto.id}
                                >
                                    {producto.nombre},
                                    &nbsp;
                                    {producto.autor},
                                    &nbsp;
                                    {producto.editorial},
                                    &nbsp;
                                    $ {producto.precio}
                                    &nbsp;
                                    <button type="button" className="btn btn-outline-success">Disponibles: {producto.inventario}</button>
                                    &nbsp;
                                    <button type="button" className="btn btn-success">Agregar al Carrito</button>
                                </li>
                            )

                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
