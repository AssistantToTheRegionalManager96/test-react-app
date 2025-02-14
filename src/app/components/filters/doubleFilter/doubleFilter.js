const { useState, useEffect } = require("react");

const DoubleFilter = ({ type, step, min, max, update, children }) => {
    const [filter, setFilter] = useState({
        inputType: 0,
        specificInput: "",
        rangeInputLower: "",
        rangeInputUpper: "",
    })

    useEffect(() => {
        update(filter);
    })

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
                                <input className="form-check-input" type="radio" name={`${children}Filter`} checked={filter.inputType == 0} 
                                onChange={() => setFilter({
                                    inputType: 0, 
                                    specificInput: filter.specificInput, 
                                    rangeInputLower: filter.rangeInputLower, 
                                    rangeInputUpper: filter.rangeInputUpper 
                                    })}/>
                            </div>
                        </div>
                        <div className={`col-2 d-flex align-items-center justify-content-start smallText`}>Equal</div>
                        <div className="col-3 pe-1 ps-1">
                            <input type={type} step={step} className="form-control form-control-sm" min={min} max={max} disabled={filter.inputType == 1}
                            value={filter.specificInput} onChange={(e) => setFilter({
                                inputType: filter.inputType, 
                                specificInput: e.target.value, 
                                rangeInputLower: filter.rangeInputLower, 
                                rangeInputUpper: filter.rangeInputUpper 
                                })}/>
                        </div>
                        <div className="col-5"></div>
                    </div>

                    <div className="row align-items-center gap-1">
                        <div className="col-1">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name={`${children}Filter`} checked={filter.inputType == 1} 
                                onChange={() => setFilter({
                                inputType: 1, 
                                specificInput: filter.specificInput, 
                                rangeInputLower: filter.rangeInputLower, 
                                rangeInputUpper: filter.rangeInputUpper 
                                })}/>
                            </div>
                        </div>
                        <div className={`col-2 d-flex align-items-center justify-content-start smallText`}>Between</div>
                        <div className="col-3 pe-1 ps-1">
                            <input type={type} step={step} className="form-control form-control-sm" min={min} max={max}  disabled={filter.inputType == 0} 
                            value={filter.rangeInputLower} onChange={(e) => setFilter({
                                inputType: filter.inputType, 
                                specificInput: filter.specificInput, 
                                rangeInputLower: e.target.value, 
                                rangeInputUpper: filter.rangeInputUpper 
                                })}/>
                        </div>
                        <div className={`col-1 d-flex align-items-center justify-content-center smallText`}>and</div>
                        <div className="col-3 pe-1 ps-1">
                            <input type={type} step={step} className="form-control form-control-sm" min={min} max={max}  disabled={filter.inputType == 0}
                            value={filter.rangeInputUpper} onChange={(e) => setFilter({
                                inputType: filter.inputType, 
                                specificInput: filter.specificInput, 
                                rangeInputLower: filter.rangeInputLower, 
                                rangeInputUpper: e.target.value 
                                })}/>
                        </div>
                    </div>
                </div>

                <div className="col-2 d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary btn-sm" onClick={() => setFilter({
                                inputType: 0, 
                                specificInput: "", 
                                rangeInputLower: "", 
                                rangeInputUpper: "" 
                                })}>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default DoubleFilter;