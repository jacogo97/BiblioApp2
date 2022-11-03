import axios from 'axios';
import React, { Component } from 'react'


export default class CrearProducto extends Component {

    state = {
        productos: [],
        nombre: '',
        _autor: '',
        _editorial: '',
        _inventario: '',
        _precio: ''
    }

    async componentDidMount() {
        this.getProductos();
    }

    getProductos = async () => {
        const rest = await axios.get('http://localhost:3000/productos');
        this.setState({ productos: rest.data });
    }

    onChangeNombre = (e) => {
        this.setState({nombre:e.target.value});
    }

    onChangeAutor = (e) => {
        this.setState({_autor:e.target.value});
    }

    onChangeEditorial = (e) => {
        this.setState({_editorial:e.target.value});
    }

    onChangeInventario = (e) => {
        this.setState({_inventario:e.target.value});
    }

    onChangePrecio = (e) => {
        this.setState({_precio:e.target.value});
    }

    onClean = () => {
        this.setState(
            {
                nombre: '', _autor: '', _editorial: '', _inventario: '', _precio: ''
            }
        );
    }

    onSubmit=async (e) => {
        e.preventDefault();
        await axios.post('http//:localhost:3000/productos', {
            nombre:this.state.nombre,
            autor:this.state._autor,
            editorial:this.state._editorial,
            inventario:this.state._inventario,
            precio:this.state._precio
        }
        );
        this.getProductos();
        this.onClean();
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md4'>
                    <div className='card card-body'>
                        <h1>CREAR NUEVO PRODUCTO</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <h4>Nombre: </h4>
                                <input type='text' className='form.control' value={this.state.nombre} onChange={this.onChangeNombre}></input>
                                <h4>Autor: </h4>
                                <input type='text' className='form.control' value={this.state._autor} onChange={this.onChangeAutor}></input>
                                <h4>Editorial: </h4>
                                <input type='text' className='form.control' value={this.state._editorial} onChange={this.onChangeEditorial}></input>
                                <h4>Inventario: </h4>
                                <input type='text' className='form.control' value={this.state._inventario} onChange={this.onChangeInventario}></input>
                                <h4>Precio: </h4>
                                <input type='text' className='form.control' value={this.state._precio} onChange={this.onChangePrecio}></input>
                            </div>
                            <div className='container p-4'>
                                <button type='submit' className='btn btn-primary'>GUARDAR</button>
                            </div>
                        </form>
                    </div>



                </div>

            </div>
        )
    }
}
