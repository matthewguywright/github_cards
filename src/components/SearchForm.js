import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            githubApiUrl: 'https://api.github.com/users/'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const self = this;
        if(this.state.userName) {
            fetch(`${this.state.githubApiUrl}${this.state.userName}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        self.props.onSubmit(result);
                        self.setState({ userName: '' });
                    },
                    (error) => {
                        console.log(error.message);
                    }
                );
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
