import React, { Component } from 'react';


export default class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: []
        }
        this.onEdit = this.onEdit.bind(this)
    }

    onEdit() {
        console.log(this.state.student)
    }

    render() {
        return (
            <tbody>
            <tr>
              <td>{this.props.firstname}</td>
              <td>{this.props.lastname}</td>
            </tr>
            </tbody>
            
        )
    }
}

