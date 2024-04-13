import React, { useState } from 'react'
import firebase from 'firebase/compat/app';

const Shows2 = () => {

    const [schools, setShows] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("shows");
    console.log(ref);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div>
            <h1>Shows</h1>
            {shows.map((show) => (
                <div key={show.heading}>
                    <h2>{show.date}</h2>
                    <h2>{show.venue}</h2>
                </div>
            ))}
        </div>
    )
}

export default Shows2