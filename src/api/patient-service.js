class PatientService {

    getPatientsList(patientListProcessor) {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState == 4) {
                if (request.status >= 200 && request.status < 300) {
                    patientListProcessor(JSON.parse(request.responseText));
                } else {
                    console.log(`Request has failed with code ${request.status}`);
                }
            }
        };
        request.open("GET", "/patient", true);
        request.send();
    }

    createPatient(patient, successCallback, failureCallback) {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState == 4) {
                if (request.status >= 200 && request.status < 300) {
                    successCallback();
                } else {
                    failureCallback();
                }
            }
        };
        request.open("POST", "/patient", true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(JSON.stringify(patient));
    }
}

export default new PatientService();