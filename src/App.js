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
        this.setPatientList = this.setPatientList.bind(this);
        this.addPatient = this.addPatient.bind(this);
        this.createPatient = this.createPatient.bind(this);
        this.patientCreated = this.patientCreated.bind(this);
        this.patientCreationFailed = this.patientCreationFailed.bind(this);
        this.showList = this.showList.bind(this);
    }

    render() {
        return (
            <div>
                {
                    this.state.page === "list" ?
                        <PatientList patientList={this.state.patientList} addPatient={this.addPatient}/> :
                        <PatientForm createPatient={this.createPatient} showList={this.showList}/>
                }
            </div>
        );
    }

    componentDidMount() {
        patientService.getPatientsList(this.setPatientList);
    }

    setPatientList(patientList) {
        this.setState({patientList: patientList});
    }

    addPatient() {
        this.setState({page: "form"});
    }

    createPatient(patient) {
        patientService.createPatient(patient, this.patientCreated, this.patientCreationFailed);
    }

    patientCreated() {
        this.showList();
        patientService.getPatientsList(this.setPatientList);
    }

    patientCreationFailed() {
        alert("Не удалось создать пациента");
    }

    showList() {
        this.setState({page: "list"});
    }
}

export default App;
