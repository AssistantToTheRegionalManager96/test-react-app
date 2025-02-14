
const SingleFilter = ({ type, step, min, max, filter, handleUpdateFilter, children }) => {

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className={`col-2 d-flex align-items-center justify-content-end smallText`}>
                    {children}:
                </div>
                <div className="col-8 container pe-0 ps-0">
                    <div className="row align-items-center gap-1">
                        <div className="col-1">
                        </div>
                        <div className={`col-2 d-flex align-items-center justify-content-start smallText`}></div>
                        <div className="col-3 pe-1 ps-1">
                            <input type={type} step={step} className="form-control form-control-sm" min={min} max={max}
                            value={filter} onChange={(e) => handleUpdateFilter(e.target.value)}/>
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>

                <div className="col-2 d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary btn-sm" onClick={() => handleUpdateFilter("")}>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default SingleFilter;