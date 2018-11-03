import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import axios from 'axios'

import moment from "moment";
moment.locale('pt-BR')

import Header from '../theme/header'
import Content from '../theme/content'
import Profile from '../common/components/Profile';

import { getEventos, setReducerItem, salvarEvento } from '../actions/EventosActions'

class Eventos extends Component {

    componentDidMount() {
        this.props.getEventos()
    }

    render() {
        let { eventos, name, subject, speaker, schedule, room } = this.props.EventosReducer
        return (
            <div>
                <Header title='Eventos'>
                    <button className='btn btn-primary' type="button" data-toggle="modal" data-target="#myModal" >Adicionar Evento</button>
                </Header>
                <Content>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Palestra</th>
                                    <th scope="col">Assunto</th>
                                    <th scope="col">Palestrante</th>
                                    <th scope="col">Horário</th>
                                    <th scope="col">Local</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    eventos.length > 0 ?

                                        eventos.map((item, index) => {

                                            let { name, subject, speaker, schedule, room } = item

                                            return (
                                                <tr key={index}>
                                                    <td style={{ minWidth: 180 }}>
                                                        <p>{name}</p>
                                                    </td>
                                                    <td style={{ maxWidth: 480 }}>
                                                        <p>{subject}</p>
                                                    </td>
                                                    <td>
                                                        <p>{speaker}</p>
                                                    </td>
                                                    <td>
                                                        <p>{schedule}</p>
                                                    </td>
                                                    <td>
                                                        <p>{room}</p>
                                                    </td>
                                                </tr>
                                            )
                                        })

                                        :

                                        <tr>
                                            <td colSpan={5}><h3>Sem eventos cadastrados</h3></td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>


                    { /** modal */}

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Adicionar Evento</h4>
                                </div>

                                <div className="modal-body">

                                    <div class="form-group row"><label class="col-sm-2 col-form-label">Palestra</label>
                                        <div class="col-sm-10">
                                            <input value={name} onChange={(event) => { this.props.setReducerItem('SET_NAME', event.target.value) }} type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-2 col-form-label">Assunto</label>
                                        <div class="col-sm-10">
                                            <input value={subject} onChange={(event) => { this.props.setReducerItem('SET_SUBJECT', event.target.value) }} type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-2 col-form-label">Palestrante</label>
                                        <div class="col-sm-10">
                                            <input value={speaker} onChange={(event) => { this.props.setReducerItem('SET_SPEAKER', event.target.value) }} type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-2 col-form-label">Horário</label>
                                        <div class="col-sm-10">
                                            <input value={schedule} onChange={(event) => { this.props.setReducerItem('SET_SCHEDULE', event.target.value) }} type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row"><label class="col-sm-2 col-form-label">Local</label>
                                        <div class="col-sm-10">
                                            <select value={room} placeholder="Selecione uma sala" onChange={(event) => { this.props.setReducerItem('SET_ROOM', event.target.value) }} type="text" class="form-control" >
                                                <option value="sala" selected={room == 'sala'} disabled>Selecione uma sala</option>
                                                <option value="Hall" selected={room == 'Hall'}>Hall </option>
                                                <option value="Sala 01" selected={room == 'Sala 01'}>Sala 01</option>
                                                <option value="Sala 02" selected={room == 'Sala 02'}>Sala 02</option>
                                                <option value="Sala 03" selected={room == 'Sala 03'}>Sala 03</option>
                                                <option value="Sala 04" selected={room == 'Sala 04'}>Sala 04</option>
                                                <option value="Sala 05" selected={room == 'Sala 05'}>Sala 05</option>
                                                <option value="Sala Extra" selected={room == 'Sala Extra'}>Sala Extra</option>

                                                ['Hall', 'Sala 01', 'Sala 02', 'Sala 03', 'Sala 04', 'Sala 05', 'Sala Extra']
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" onClick={() => { this.props.salvarEvento() }}>Salvar</button>
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    AuthReducer: state.AuthReducer,
    EventosReducer: state.EventosReducer
})
const mapDispatchToProps = {
    getEventos, setReducerItem, salvarEvento
}
export default connect(mapStateToProps, mapDispatchToProps)(Eventos)