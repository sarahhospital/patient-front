import React, {Component} from 'react';

export default class PatientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: "",
            firstName: "",
            middleName: "",
            gender: "",
            birthDate: ""
        };
        this.createPatient = this.createPatient.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeMiddleName = this.changeMiddleName.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.changeBirthDate = this.changeBirthDate.bind(this);
    }


    render() {
        return (
            <div>
                <h1>Пациент</h1>
                <form>
                    <label>Фамилия_______
                        <input onChange={this.changeLastName} />
                    </label>
                    <br />
                    <label>Имя____________
                        <input onChange={this.changeFirstName} />
                    </label>
                    <br />
                    <label>Отчество_______
                        <input onChange={this.changeMiddleName} />
                    </label>
                    <br />
                    <label>Пол____________
                        <input onChange={this.changeGender} />
                    </label>
                    <br />
                    <label>Дата рождения
                        <input onChange={this.changeBirthDate} />
                    </label>
                    <br />
                    <button onClick={this.createPatient}>Создать</button>
                </form>
                <button onClick={this.props.showList}>Отмена</button>
            </div>
        );
    }

    createPatient() {
        this.props.createPatient({
            humanNames: [
                {
                    family: this.state.lastName,
                    given: this.state.firstName,
                    patronymic: this.state.middleName
                }
            ],
            gender: this.state.gender,
            birthDate: this.state.birthDate
        });
    }

    changeLastName(event) {
        this.setState(Object.assign({}, this.state, {lastName: event.target.value}))
    }
    changeFirstName(event) {
        this.setState(Object.assign({}, this.state, {firstName: event.target.value}))
    }
    changeMiddleName(event) {
        this.setState(Object.assign({}, this.state, {middleName: event.target.value}))
    }
    changeGender(event) {
        this.setState(Object.assign({}, this.state, {gender: event.target.value}))
    }
    changeBirthDate(event) {
        this.setState(Object.assign({}, this.state, {birthDate: event.target.value}))
    }
}