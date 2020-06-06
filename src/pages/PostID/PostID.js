import React, { useState, useEffect } from 'react';

export default function PostID(props) {

    const [id, setId] = useState(props.match.params.id);

    useEffect(() => {
        console.log(id);
    });

    return (
        <div>
            PostID {id}
        </div>
    )

}