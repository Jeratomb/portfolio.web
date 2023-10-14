import React from "react";

interface FetchingErrorProps{
    error:string;
}

export function FetchingError(props: FetchingErrorProps){
    const { error } = props;
    return (
        <div>
            <p>{error}</p>
        </div>
    );
}