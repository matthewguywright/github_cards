import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const profile = this.props;
        return (
            <div className="col-6 mb-2">
                <div className='card'>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <img className='img-fluid'  src={profile.avatar_url} alt={profile.name} />
                            </div>
                            <div className="col-8">
                                <div className="name">Name: {profile.name || 'N/A'}</div>
                                <div className="company">Company: {profile.company || 'N/A'}</div>
                                <div className="handle">Username: <a href={profile.html_url} target='_blank'>{profile.login}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Card;
