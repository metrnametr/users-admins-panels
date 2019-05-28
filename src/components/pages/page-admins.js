import React from 'react'

const pageAdmins = () => {
    const thisStyle = {
        margin: 'auto',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'

    }
    const hStyle = {
        color: 'tomato', 
        fontSize: '3em',
        textTransform: 'uppercase'
    }

    const string = 'страшно';
    console.log(string)
    return(
        <div style={thisStyle}>
            <h1 style={hStyle} >{string}</h1>
            <iframe width="700" height="500" src="https://www.youtube.com/embed/FUdteCBRX9c?autoplay=1&amp;loop=1&amp;" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" ></iframe>
        </div>
    )
}

export default pageAdmins;