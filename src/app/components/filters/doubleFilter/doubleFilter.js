const DoubleFilter = ({ type, step, min, max, filter, handleUpdateFilter, children }) => {

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className={`col-2 d-flex align-items-center justify-content-end smallText`}>
                    {children}:
                </div>
                <div className="col-8 container pe-0 ps-0">
                    <div className="row align-items-center gap-1">
                        <div className="col-1">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name={`${children}Filter`} checked={filter.mode == 0} 
                                onChange={() => handleUpdateFilter({
                                    mode: 0, 
                                    specific: filter.specific, 
                                    lower: filter.lower, 
                                    upper: filter.upper 
                                    })}/>
                            </div>
                        </div>
                        <div className={`col-2 d-flex align-items-center justify-content-start smallText`}>Equal</div>
                        <div className="col-3 pe-1 ps-1">
                            <input type={type} step={step} className="form-control form-control-sm" min={min} max={max} disabled={filter.mode == 1}
                            value={filter.specific} onChange={(e) => handleUpdateFilter({
                                mode: filter.mode, 
                                specific: e.target.value, 
                                lower: filter.lower, 
                                upper: filter.upper 
                                })}/>
                        </div>
                        <div className="col-5"></div>
                    </div>

                    <div className="row align-items-center gap-1">
                        <div className="col-1">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name={`${children}Filter`} checked={filter.mode == 1} 
                                onChange={() => handleUpdateFilter({
                                mode: 1, 
                                specific: filter.specific, 
                                lower: filter.lower, 
                                upper: filter.upper 
                                })}/>
                            </div>
                        </div>
                        <div className={`col-2 d-flex align-items-center justify-content-start smallText`}>Between</div>
                        <div className="col-3 pe-1 ps-1">
                            <input type={type} step={step} className="form-control form-control-sm" min={min} max={max}  disabled={filter.mode == 0} 
                            value={filter.lower} onChange={(e) => handleUpdateFilter({
                                mode: filter.mode, 
                                specific: filter.specific, 
                                lower: e.target.value, 
                                upper: filter.upper 
                                })}/>
                        </div>
                        <div className={`col-1 d-flex align-items-center justify-content-center smallText`}>and</div>
                        <div className="col-3 pe-1 ps-1">
                            <input type={type} step={step} className="form-control form-control-sm" min={min} max={max}  disabled={filter.mode == 0}
                            value={filter.upper} onChange={(e) => handleUpdateFilter({
                                mode: filter.mode, 
                                specific: filter.specific, 
                                lower: filter.lower, 
                                upper: e.target.value 
                                })}/>
                        </div>
                    </div>
                </div>

                <div className="col-2 d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary btn-sm" onClick={() => handleUpdateFilter({
                                mode: 0, 
                                specific: "", 
                                lower: "", 
                                upper: "" 
                                })}>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default DoubleFilter;