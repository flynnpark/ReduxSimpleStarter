import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this._onInputChange = this._onInputChange.bind(this);
    }

    _onInputChange(event) {
        console.log(event.target.value);
        this.setState({
            term: event.target.value
        });
    }

    _onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="input-group" onSubmit={this._onFormSubmit}>
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this._onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

export default SearchBar;
