import React, {Component} from 'react';
import PatientList from './components/patient-list.jsx';
import PatientForm from './components/patient-form.jsx';
import patientService from './api/patient-service.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientList: [],
            page: "list"
        };
        this.createPatient = this.createPatient.bind(this);
        this.addPatient = this.addPatient.bind(this);
        this.showList = this.showList.bind(this);
        this.setPatientList = this.setPatientList.bind(this);
    }

    render() {
        return (
            <div>
                {
                    this.state.page === "list" ?
                        <PatientList patientList={this.state.patientList} createPatient={this.addPatient} /> :
                        <PatientForm addPatient={this.createPatient} showList={this.showList} />
                }
            </div>
        );
    }

    componentDidMount() {
        patientService.getPatientsList(this.setPatientList);
    }

    setPatientList(patientList) {
        this.setState(Object.assign({}, this.state, {patientList: patientList}));
    }

    addPatient() {
        this.setState(Object.assign({}, this.state, {page: "form"}));
    }

    createPatient(patient) {
        patientService.createPatient(patient);
        this.showList();
    }

    showList() {
        this.setState(Object.assign({}, this.state, {page: "list"}));
    }
}

export default App;
