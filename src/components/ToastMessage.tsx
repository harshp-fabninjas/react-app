import './css/ToastMessage.css'

function ToastMessage({showToaster, setShowToaster, toastMessage}) {
    return (
        <>
            {/* Both toasts are always on the page - the "show" class slides one in */}
            <div className="toast-container">

                <div className={`toast success ${showToaster === "success" ? "show" : ""}`}>
                    <svg className="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="8 12 11 15 16 9" />
                    </svg>

                    <div className="toast-content">
                        <p className="toast-title">Success</p>
                        <p className="toast-text">{toastMessage}</p>
                    </div>

                    <button type="button" className="toast-close" aria-label="Close message" onClick={() => setShowToaster("")}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="6" y1="6" x2="18" y2="18" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className={`toast error ${showToaster === "error" ? "show" : ""}`}>
                    <svg className="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="7" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>

                    <div className="toast-content">
                        <p className="toast-title">Error</p>
                        <p className="toast-text">{toastMessage}</p>
                    </div>

                    <button type="button" className="toast-close" aria-label="Close message" onClick={() => setShowToaster("")}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="6" y1="6" x2="18" y2="18" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                        </svg>
                    </button>
                </div>

            </div>
        </>
    )
}

export default ToastMessage
