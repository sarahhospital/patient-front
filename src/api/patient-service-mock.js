class PatientService {
    constructor() {
        this.patientList = [];
        this.counter = 1;
    }

    getPatientsList(patientListProcessor) {
        patientListProcessor(this.patientList);
    }

    createPatient(patient, successCallback, failureCallback) {
        patient.identifiers = [{
            value: this.counter++
        }];
        this.patientList.push(patient);
        successCallback();
    }
}

export default new PatientService();