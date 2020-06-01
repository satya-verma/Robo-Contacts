import React from 'react';

const Card = ({ email, name, id }) => {
    return (
        <div className="tc bg-yellow dib br3 pa3 ma3 grow shadow-4 ">
            <div className="tc">
                <img src={`https://robohash.org/${id}?size=200x200`} alt='' />
            </div>
            <div className="fc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;