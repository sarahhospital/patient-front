import React, {Component} from 'react';

export default class PatientList extends Component {
    render() {
        return (
            <div>
                <h1>Список пациентов</h1>
                <div>
                    <button onClick={this.props.addPatient}>Создать</button>
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
                        this.props.patientList.map(patient => <tr key={patient.identifiers[0].value}>
                            <td>{patient.humanNames[0].family}</td>
                            <td>{patient.humanNames[0].given}</td>
                            <td>{patient.humanNames[0].patronymic}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.birthDate}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}