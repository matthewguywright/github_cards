import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const profile = this.props;
        return (
            <div className='card'>
                <div className="card-body">
                    <img src={profile.avatar_url} alt={profile.name} />
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

export default Card;
