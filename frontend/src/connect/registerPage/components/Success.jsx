import React from "react";

const Success = ({goToNext}) => (
    <>
        <h1>Success</h1>
        <p>Congratulation! you qualify teenage discount</p>
        <button onClick={ () => goToNext({})}>Next</button>
    </> 
);

export default Success;