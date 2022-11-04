import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


export const Home = () => {




  return (
    <Fragment>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

      <div className="container-fluid row">
        <div className="card col-6 col-md-3 mt-4 mt-md-0">
          <img src="https://hotmart.s3.amazonaws.com/product_contents/dd226ada-8df7-439e-8d61-d3f688b9ab49/libros2_2118499843.jpg" class="card-img-top" alt="imagen"></img>
          <div className="card-body">
            <p className="card-text">Aquí puede ver la lista de productos.</p>
            <Link to="/Productos" className="btn btn-success">Productos</Link>
          </div>
        </div>

        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        <div className="card col-6 col-md-3 mt-4 mt-md-0">
          <img src="https://hotmart.s3.amazonaws.com/product_contents/dd226ada-8df7-439e-8d61-d3f688b9ab49/libros2_2118499843.jpg" class="card-img-top" alt="imagen"></img>
          <div className="card-body">
            <p className="card-text">Aquí puede crear un producto nuevo.</p>
            <Link to="/crearProducto" className="btn btn-success">Crear Producto</Link>
          </div>
        </div>

        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        <div className="card col-6 col-md-4 mt-4 mt-md-0">
          <img src="https://hotmart.s3.amazonaws.com/product_contents/dd226ada-8df7-439e-8d61-d3f688b9ab49/libros2_2118499843.jpg" class="card-img-top" alt="imagen"></img>
          <div className="card-body">
            <p className="card-text">Aquí puede ver las ultimas ventas realizadas.</p>
            <Link to="/Ventas" className="btn btn-success">Ventas</Link>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Home;