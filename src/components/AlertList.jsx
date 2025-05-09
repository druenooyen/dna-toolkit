

const AlertList = ({ alerts, onDismiss }) => {
    return(
        <>
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`alert alert-${alert.type} alert-dismissible`}
            role="alert"
          >
            <div>{alert.message}</div>
            <button
              type="button"
              className="btn-close"
              onClick={() => onDismiss(alert.id)}
              aria-label="Close"
            ></button>
          </div>
        ))}
        </>
    );
    };

    export default AlertList;