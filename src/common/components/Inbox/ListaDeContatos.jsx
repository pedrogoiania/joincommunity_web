import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class ListaDeContatos extends Component {

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome da lista</th>
                        <th>Quantidade de contatos</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nutricionistas</td>
                        <td>20</td>
                        <td>
                            <div className="row">
                                <button className="btn btn-xs btn-primary" style={{marginRight: 8}}>Ver lista</button>
                                <button className="btn btn-xs btn-warning" style={{marginRight: 8}}>Editar lista</button>
                                <button className="btn btn-xs btn-success">Enviar mensagem</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Advogados</td>
                        <td>32</td>
                        <td>
                            <div className="row">
                                <button className="btn btn-xs btn-primary" style={{marginRight: 8}}>Ver lista</button>
                                <button className="btn btn-xs btn-warning" style={{marginRight: 8}}>Editar lista</button>
                                <button className="btn btn-xs btn-success">Enviar mensagem</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Psicologos</td>
                        <td>45</td>
                        <td>
                            <div className="row">
                                <button className="btn btn-xs btn-primary" style={{marginRight: 8}}>Ver lista</button>
                                <button className="btn btn-xs btn-warning" style={{marginRight: 8}}>Editar lista</button>
                                <button className="btn btn-xs btn-success">Enviar mensagem</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    AuthReducer: state.AuthReducer
})
const mapDispatchToProps = null
export default connect(mapStateToProps, mapDispatchToProps)(ListaDeContatos)