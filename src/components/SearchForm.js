import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            githubApiUrl: 'https://api.github.com/users/'
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if(this.state.userName) {
            const response = await fetch(`${this.state.githubApiUrl}${this.state.userName}`);
            const respJson = response.json();
            this.props.onSubmit(respJson);
            this.setState({ userName: '' });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder='GitHub Username'/>
                <button>Add Card</button>
            </form>
        );
    }
}

export default SearchForm;
