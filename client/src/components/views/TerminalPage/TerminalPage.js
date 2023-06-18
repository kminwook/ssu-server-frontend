import React from 'react'
import WebTerminal from 'WebTerminal';
import SocketConfig from '../../config/SocketConfig';

const TermianlPage = () => {
    const socketConfig = new SocketConfig();

    return (
        <div className="App">
            <WebTerminal socket={socketConfig} />
        </div>
    );
};

export default TermianlPage;
