import React, { Component, useState } from 'react';
import MiddleContent from './MiddleContent/MiddleContent.jsx';
import './app.scss';
import RequestModal from './RequestModal/RequestModal.jsx';
import SuccessModal from './SuccessModal/SuccessModal.jsx'

const App = () => {
    const appContainer = "app-container";
    const [showRequest, setShowRequest] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const toggleRequestModal = (showModal) => {
        setShowRequest(showModal);
    }

    return (
        <div className={appContainer}>
            <div className={appContainer + "-top-head"}>
                <div className={appContainer + "-top-head-content"}>{"BROCCOLI & CO."}</div>
            </div>
            <div className={appContainer + '-middle-content'}><MiddleContent toggleRequest={toggleRequestModal}/></div>
            {showRequest ? <div className={appContainer + '-request-modal'}><RequestModal toggleRequest={setShowRequest} toggleSuccess={setShowSuccess}/></div> : null}
            {showSuccess ? <div className={appContainer + '-success-modal'}><SuccessModal toggleSuccess={setShowSuccess}/></div> : null}
            <div className={appContainer + "-bottom-footer"}>
                <div>
                    {"Made with ♥️ in Melbourne."}
                </div>
                <div>
                    {"© 2016 Brocoli & Co. All rights reserved."}
                </div>
            </div>
        </div>
    )
}

export default App;
