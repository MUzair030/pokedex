import React from "react";


export const Wrapper = (Component: React.FC) => () =>{

    return(
        <div className="content">
            <Component />
        </div>
    );
}

