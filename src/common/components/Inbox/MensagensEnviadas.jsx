import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class MensagensEnviadas extends Component {

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Mensagem</th>
                        <th>Lista enviada</th>
                        <th>Progresso</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Curso de Instagram</td>
                        <td>Venha para o nosso curso. Acesse através do link: bit.ly/1238ds</td>
                        <td>Nutricionistas</td>
                        <td>30/42 - 71%</td>
                        <td>Enviando</td>
                    </tr>
                    <tr>
                        <td>Curso de Facebook</td>
                        <td>Venha para o nosso curso. Acesse através do link: bit.ly/1238ds</td>
                        <td>Nutricionistas</td>
                        <td>30/42 - 71%</td>
                        <td>Enviando</td>
                    </tr>
                    <tr>
                        <td>Curso de Linkedin</td>
                        <td>Venha para o nosso curso. Acesse através do link: bit.ly/1238ds</td>
                        <td>Nutricionistas</td>
                        <td>30/42 - 71%</td>
                        <td>Enviando</td>
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
export default connect(mapStateToProps, mapDispatchToProps)(MensagensEnviadas)