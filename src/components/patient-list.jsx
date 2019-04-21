import React, {Component} from 'react';

export default class PatientList extends Component {
    render() {
        return (
            <div>
                <h1>Список пациентов</h1>
                <div>
                    <button onClick={this.props.createPatient}>Create new</button>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Пол</th>
                        <th>Дата рождения</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.patientList.map(patient => <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.name}</td>
                            <td>{patient.name}</td>
                            <td>{patient.name}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}