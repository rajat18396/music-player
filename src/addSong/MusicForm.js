import React, { Component } from 'react'
import Input from "../components/Input"
import Buttons from "../components/Buttons"
import Alert from "./Dialog"







export class MusicForm extends Component {
    constructor(props) {
        super(props)
        this.list = [];

        this.state = {
            fields: {
                SongName: "",
                Artist: "",
                Location: "",
                Album: "",
                Duration: "",
                Tags: "",
                datadisplay: this.list
            },
            errors: {
                SongName: '',
                Artist: "",
                Location: "",
                Album: "",
                Duration: "",
                Tags: ""

            }



        }
        this.handleSongnamechange = this.handleSongnamechange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);


    }


    handleSongnamechange = (event) => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value
        this.setState({
            fields

        })
        console.log({ [event.target.name]: event.target.value })
    }
    appenddata() {

        const jsonobject = {
            SongName: this.state.fields.SongName,
            Artist: this.state.fields.Artist,
            Location: this.state.fields.Location,
            Album: this.state.fields.Album,
            Duration: this.state.fields.Duration,
            Tags: this.state.fields.Tags

        }
        this.list.push(jsonobject);


        this.setState({
            fields: {
                SongName: "",
                Artist: "",
                Location: "",
                Album: "",
                Duration: "",
                Tags: "",
                datadisplay: this.list,

            }
        })



        const data = this.state;
        const jsondata = JSON.stringify(data)
        console.log('final data is', jsondata)
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.handleValidation()) {
            this.appenddata();


        }




    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {

        };
        let formIsValid = true;


        if (!fields["SongName"]) {
            formIsValid = false;
            errors["SongName"] = "Cannot be empty";
        }
        if (!fields["Artist"]) {
            formIsValid = false;
            errors["Artist"] = "Cannot be empty";
        }
        if (!fields["Location"]) {
            formIsValid = false;
            errors["Location"] = "Cannot be empty";
        }
        if (!fields["Album"]) {
            formIsValid = false;
            errors["Album"] = "Cannot be empty";
        }
        if (!fields["Duration"]) {
            formIsValid = false;
            errors["Duration"] = "Cannot be empty";
        }
        if (!fields["Tags"]) {
            formIsValid = false;
            errors["Tags"] = "Cannot be empty";
        }


        this.setState({ errors: errors });
        return formIsValid;
    }

    handleClearForm = () => {


        this.setState({
            fields: {
                SongName: "",
                Artist: "",
                Location: "",
                Album: "",
                Duration: "",
                Tags: "",
                datadisplay: []
            },
            errors: {
                SongName: '',
                Artist: "",
                Location: "",
                Album: "",
                Duration: "",
                Tags: ""

            }

        })

    };

    render() {
        return (
            <div className="FormCenter">

                <form className="Formfields" onSubmit={this.handlesubmit}>

                    <div className="root">
                        <h2>ADD SONGS</h2>
                        <Input type={"text"}
                            key={"1"}
                            title={"Song Name"}
                            value={this.state.fields['SongName']}
                            className="FormField__Input"
                            placeholder={"Enter the song"}
                            name={"SongName"}
                            handleChange={this.handleSongnamechange} />
                        <div className="errorMsg">{this.state.errors.SongName}</div>

                        <Input type={"text"}
                            key="2"
                            title={"Artist"}
                            value={this.state.fields['Artist']}
                            className="FormField__Input"
                            placeholder={"Enter Artist name"}
                            name={"Artist"}
                            handleChange={this.handleSongnamechange} />
                        <div className="errorMsg">{this.state.errors.Artist}</div>

                        <Input type={"text"}
                            key="3"
                            title={"Location"}
                            value={this.state.fields['Location']}
                            className="FormField__Input"
                            placeholder={"Enter location"}
                            name={"Location"}
                            handleChange={this.handleSongnamechange} />
                        <div className="errorMsg">{this.state.errors.Location}</div>

                        <Input type={"text"}
                            key="4"
                            title={"Album"}
                            value={this.state.fields['Album']}
                            className="FormField__Input"
                            placeholder={"Enter Album name"}
                            name={"Album"}
                            handleChange={this.handleSongnamechange} />
                        <div className="errorMsg">{this.state.errors.Album}</div>

                        <Input type={"Number"}
                            key="5"
                            title={"Duration"}
                            value={this.state.fields['Duration']}
                            className="FormField__Input"
                            placeholder={"Enter Duration"}
                            name={"Duration"}
                            handleChange={this.handleSongnamechange} />
                        <div className="errorMsg">{this.state.errors.Duration}</div>

                        <Input type={"text"}
                            key="6"
                            title={"Tags"}
                            value={this.state.fields['Tags']}
                            className="FormField__Input"
                            placeholder={"Enter Tags"}
                            name={"Tags"}
                            handleChange={this.handleSongnamechange} />
                        <div className="errorMsg">{this.state.errors.Tags}</div>

                        <div className="button">
                            <Buttons action={this.handleFormSubmit} title={"Add"} />

                            <Alert></Alert>


                        </div>

                    </div>
                </form>
                <div>

                    {this.state.fields.datadisplay.map((datadisplay, index) =>
                        (
                            <pre className="displayresult" key={index}><div key={index}>

                                SongName:  {datadisplay.SongName}<br></br>
                                Artist  :  {datadisplay.Artist}<br></br>
                                Location:  {datadisplay.Location}<br></br>
                                Album   :  {datadisplay.Album}<br></br>
                                Duration:  {datadisplay.Duration}<br></br>
                                Tags    :  {datadisplay.Tags}</div>
                            </pre>))}
                </div>
            </div>
        )
    }
}

export default MusicForm
