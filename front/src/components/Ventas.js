


import React, { Component } from 'react'
import axios from 'axios'

export default class Ventas extends Component {

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
          <h1>VENTAS</h1>
        </div>

        <div className='col-md-6'>
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
                  $ {producto.precio}
                  &nbsp;
                  <button type="button" className="btn btn-outline-success">Cantidad: 1</button>
                </li>

              )

              )

            }
          </ul>
          &nbsp;&nbsp;
          <div className='col-md6'>

          </div>
          <button type="button" className="btn btn-warning">TOTAL ARTICULOS VENDIDOS</button>
        </div>
      </div>
      
    )
  }
}