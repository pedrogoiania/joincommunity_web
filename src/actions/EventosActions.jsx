import axios from 'axios'
import swal from 'sweetalert'

export const setReducerItem = (type, payload) =>
    dispatch => {
        dispatch({ type, payload })
    }

export const getEventos = () =>
    dispatch => {
        axios.get(`http://api.apresentacao.xyz/event`)
            .then((response) => {
                console.log(response.data)
                dispatch({
                    type: 'SET_EVENTOS',
                    payload: response.data
                })
            })
            .catch((error) => {
                error = JSON.parse(JSON.stringify(error))
                console.log(error.response.data)
            })
    }

export const salvarEvento = () =>
    (dispatch, getState) => {
        let state = getState()
        let EventosReducer = state.EventosReducer
        let { name, subject, speaker, schedule, room } = EventosReducer

        let data = {
            name,
            subject,
            speaker,
            schedule,
            room
        }

        axios.post(`http://api.apresentacao.xyz/event`, data)
            .then((response) => {
                dispatch([getEventos()])

                dispatch([
                    setReducerItem('SET_NAME', ''),
                    setReducerItem('SET_SUBJECT', ''),
                    setReducerItem('SET_SPEAKER', ''),
                    setReducerItem('SET_SCHEDULE', ''),
                    setReducerItem('SET_ROOM', 'sala')
                ])

                swal("Eventos", "Evento salvo com sucesso!!!", "success");
                $('#myModal').modal('hide')
            })
            .catch((error) => {
                error = JSON.parse(JSON.stringify(error))

                swal("Eventos", "Houve um erro ao tentar salvar o evento!!!", "error");
                console.log(error)
            })
    }