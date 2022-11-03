


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
          <h1>Productos en el carrito</h1>
        </div>

        <div className='col-md-8'>
          <ul className='list-group'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {
              this.state.productos.map(producto => (


                <li
                  className="list-group-item list-group-item-action"
                  key={producto.id}
                >
                  <button type="button" className="btn btn-outline-primary">nombre: </button>
                  &nbsp;
                  {producto.nombre}
                  &nbsp;
                  <button type="button" className="btn btn-outline-primary">precio/unidad: </button>
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
          <a class="btn btn-primary" href="/Productos" role="button">Seguir Comprando</a>
          </div>
          <div><button type="button" className="btn btn-warning">TOTAL DE LA COMPRA</button></div>
          <button type="button" className="btn btn-dark">REALIZAR PAGO</button>
          
          
          
        
          
        </div>
      </div>
      
    )
  }
}