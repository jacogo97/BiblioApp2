import React, {Fragment} from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                    <Link to="/" ><img src="./images/logop.png" alt="BiblioApp Logo"></img></Link>
                    </div>
                </div>

                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            className="form-control"
                            placeholder='Que producto busca?'></input>
                        <div className="input-group-append">
                            <button id="search-btn" className="btn">
                                <i className="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <span><button className='btn' id="login_btn">Inicie Sesión</button></span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a className="btn btn-dark" href="/Carrito" role="button"><i className="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i></a>
                    
                    
                </div>
        </nav>
    </Fragment>
  )
}

export default Header