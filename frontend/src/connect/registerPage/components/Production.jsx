import React from "react";

const Production = ({goToNext}) => (
    <>
        <h1>Production</h1>
        <button onClick={ () => goToNext({clothColor: "brown"})}>Next</button>
    </> 
);

export default Production;