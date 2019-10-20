import React from 'react';
import Card from './Card';

const CardList = (props) => {
        return (<div>
                <button className="btn btn-info mb-2" onClick={props.onClick}>Clear Cards</button>
                {props.profiles.map((profile, i) => <Card key={i} {...profile} />)}
        </div>);
};

export default CardList;
