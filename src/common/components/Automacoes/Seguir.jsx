import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Seguir extends Component {

    render() {
        return (

            <div className="ibox float-e-margins">
                <div className="ibox-content">
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter email" className="form-control" />
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    AuthReducer: state.AuthReducer
})
const mapDispatchToProps = null
export default connect(mapStateToProps, mapDispatchToProps)(Seguir)