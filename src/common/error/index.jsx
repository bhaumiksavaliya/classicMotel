import React from "react";
import "./error.scss";
function Error() {
    return (
        <div className="error-wrapper">
            <div className="glitch-wrapper">
                <div className="glitch" data-glitch="404">
                    404
                </div>
            </div>
            <div className="error-page-not-found">
                <p>PAGE NOT FOUND</p>
            </div>
        </div>
    );
}

export default Error;
