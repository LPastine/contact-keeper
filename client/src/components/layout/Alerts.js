// 3 - Bring in the useContext hook
import React, { useContext } from 'react';
// 1 - Bring in the AlertContext
import AlertContext from '../../context/alert/alertContext';

export const Alerts = () => {
    // 2 - Initialize the context
    const alertContext = useContext(AlertContext);
    return (
        // 4 - Treat the output that's going to be sent for the App.js
        alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i> {alert.msg}
            </div>
        ))
    )
}

export default Alerts