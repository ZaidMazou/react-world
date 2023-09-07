import React from 'react';

function Card({country}) {
    return (
        <li className="card">
            <img src={country.flags.svg} alt="" srcset="" />
            <div className="infos">
                <h2>{country.translations.fra.common}</h2>
            </div>
        </li>
    );
}

export default Card;