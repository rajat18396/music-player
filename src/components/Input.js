import React, { Component } from "react";
import InputUi from '@material-ui/core/Input';

export class Input extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <div htmlFor={this.props.name} className="FormField__Label">
                        {this.props.title}
                        <div>
                            <InputUi
                                className="form-control"
                                key={this.props.id}

                                name={this.props.name}
                                type={this.props.type}
                                value={this.props.value}
                                onChange={this.props.handleChange}
                                placeholder={this.props.placeholder}
                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Input;
