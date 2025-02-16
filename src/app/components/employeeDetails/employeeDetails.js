import { useState, useEffect, useRef } from "react";

const EmployeeDetails = ({ id }) => {
    const [countries, setCountries] = useState([]);
    const [details, setDetails] = useState({
        basicDetails: {
            id: "",
            firstName: "",
            lastName: "",
            age: "",
            position: "",
            office: "",
            startDate: "",
            salary: ""
        },
        personalDetails: {
            id: "",
            address: {
                line1: "",
                line2: "",
                city: "",
                country: {
                    name: "",
                    dial_code: "",
                    code: ""
                },
                postalCode: ""
            },
            phone: {
                country: {
                    name: "",
                    dial_code: "",
                    code: ""
                },
                number: ""
            },
            email: {
                userName: "",
                domain: ""
            }
        },
        emergencyContactDetails: {
            id: "",
            emergencyContactGiven: false,
            name: "",
            phone: {
                country: {
                    name: "",
                    dial_code: "",
                    code: ""
                },
                number: ""
            },
            email: {
                userName: "",
                domain: ""
            }
        }
    })

    const employeeEmailDomain = useRef();
    const emergencyContactEmailDomain = useRef();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const result = await fetch(`/api/employees/${id}`);
                const details = await result.json();
                setDetails(details);
            }
            catch {

            }
        }

        const fetchCountries = async () => {
            try {
                const result = await fetch(`/api/countries`);
                const countries = await result.json();
                setCountries(countries);
            }
            catch {

            }
        }

        fetchDetails();
        fetchCountries();
    }, []);

    // const handleFirstNameChange = (firstName) => {
    //     var detailsCopy = JSON.parse(JSON.stringify(details));
    //     detailsCopy.firstName = firstName;
    //     setDetails(detailsCopy);
    // }

    // const handleLastNameChange = (lastName) => {
    //     var detailsCopy = JSON.parse(JSON.stringify(details));
    //     detailsCopy.lastName = lastName;
    //     setDetails(detailsCopy);
    // }

    // const handleAgeChange = (age) => {
    //     var detailsCopy = JSON.parse(JSON.stringify(details));
    //     detailsCopy.age = age;
    //     setDetails(detailsCopy);
    // }

    // const handlePositionChange = (position) => {
    //     var detailsCopy = JSON.parse(JSON.stringify(details));
    //     detailsCopy.position = position;
    //     setDetails(detailsCopy);
    // }

    // const handleOfficeChange = (office) => {
    //     var detailsCopy = JSON.parse(JSON.stringify(details));
    //     detailsCopy.office = office;
    //     setDetails(detailsCopy);
    // }

    // const handleStartDateChange = (startDate) => {
    //     var detailsCopy = JSON.parse(JSON.stringify(details));
    //     detailsCopy.startDate = startDate;
    //     setDetails(detailsCopy);
    // }

    // const handleSalaryChange = (salary) => {
    //     var detailsCopy = JSON.parse(JSON.stringify(details));
    //     detailsCopy.salary = salary;
    //     setDetails(detailsCopy);
    // }

    // const handleEmployeeAddressLine1Change = (line1) => {
    //     var personalDetailsCopy = JSON.parse(JSON.stringify(personalDetails));
    //     personalDetailsCopy.address.line1 = line1;
    //     setPersonalDetails(personalDetailsCopy);
    // }

    // const handleEmployeeAddressLine2Change = (line2) => {
    //     var personalDetailsCopy = JSON.parse(JSON.stringify(personalDetails));
    //     personalDetailsCopy.address.line2 = line2;
    //     setPersonalDetails(personalDetailsCopy);
    // }

    // const handleEmployeeAddressCityChange = (city) => {
    //     var personalDetailsCopy = JSON.parse(JSON.stringify(personalDetails));
    //     personalDetailsCopy.address.city = city;
    //     setPersonalDetails(personalDetailsCopy);
    // }

    // const handleEmployeeAddressCountryChange = (countryCode) => {
    //     var personalDetailsCopy = JSON.parse(JSON.stringify(personalDetails));
    //     var country = countries.filter(x => x.code == countryCode)[0];
    //     personalDetailsCopy.address.country = country;
    //     setPersonalDetails(personalDetailsCopy);
    // }

    // const handleEmployeeAddressPostalCodeChange = (postalCode) => {
    //     var personalDetailsCopy = JSON.parse(JSON.stringify(personalDetails));
    //     personalDetailsCopy.address.postalCode = postalCode;
    //     setPersonalDetails(personalDetailsCopy);
    // }

    // const handleEmployeePhoneCountryChange = (countryCode) => {
    //     var personalDetailsCopy = JSON.parse(JSON.stringify(personalDetails));
    //     var country = countries.filter(x => x.code == countryCode)[0];
    //     personalDetailsCopy.phone.country = country;
    //     setPersonalDetails(personalDetailsCopy);
    // }

    // const handleEmployeePhoneNumberChange = (number) => {
    //     var personalDetailsCopy = JSON.parse(JSON.stringify(personalDetails));
    //     personalDetailsCopy.phone.number = number;
    //     setPersonalDetails(personalDetailsCopy);
    // }

    // const handleEmployeeEmailUserNameChange = (userName) => {
    //     var personalDetailsCopy = JSON.parse(JSON.stringify(personalDetails));
    //     personalDetailsCopy.email.userName = userName;
    //     setPersonalDetails(personalDetailsCopy);
    // }

    // const handleEmployeeEmailDomainChange = (domain) => {
    //     var personalDetailsCopy = JSON.parse(JSON.stringify(personalDetails));
    //     personalDetailsCopy.email.domain = domain;
    //     setPersonalDetails(personalDetailsCopy);
    // }

    // const handleEmergencyContactRadioChange = (emergencyContactGiven) => {
    //     var emergencyContactDetailsCopy = JSON.parse(JSON.stringify(emergencyContactDetails));
    //     personalDetailsCopy.emergencyContactGiven = emergencyContactGiven;
    //     setEmergencyContactDetails(emergencyContactDetailsCopy);
    // }

    // const handleEmergencyContactNameChange = (name) => {
    //     var emergencyContactDetailsCopy = JSON.parse(JSON.stringify(emergencyContactDetails));
    //     personalDetailsCopy.name = name;
    //     setEmergencyContactDetails(emergencyContactDetailsCopy);
    // }

    // const handleEmergencyContactPhoneCountryChange = (countryCode) => {
    //     var emergencyContactDetailsCopy = JSON.parse(JSON.stringify(emergencyContactDetails));
    //     var country = countries.filter(x => x.code == countryCode)[0];
    //     personalDetailsCopy.phone.country = country;
    //     setEmergencyContactDetails(emergencyContactDetailsCopy);
    // }

    // const handleEmergencyContactPhoneNumberChange = (number) => {
    //     var emergencyContactDetailsCopy = JSON.parse(JSON.stringify(emergencyContactDetails));
    //     personalDetailsCopy.phone.number = number;
    //     setEmergencyContactDetails(emergencyContactDetailsCopy);
    // }

    // const handleEmergencyContactEmailUserNameChange = (userName) => {
    //     var emergencyContactDetailsCopy = JSON.parse(JSON.stringify(emergencyContactDetails));
    //     personalDetailsCopy.email.userName = userName;
    //     setEmergencyContactDetails(emergencyContactDetailsCopy);
    // }

    // const handleEmergencyContactEmailDomainChange = (domain) => {
    //     var emergencyContactDetailsCopy = JSON.parse(JSON.stringify(emergencyContactDetails));
    //     personalDetailsCopy.email.domain = domain;
    //     setEmergencyContactDetails(emergencyContactDetailsCopy);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(details);
    }

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col-4"></div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <h3 className="d-flex justify-content-center align-items-center">
                        Employee (ID: {id}) Dashboard
                    </h3>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row mb-3">
                <form className="container pt-4 pb-4 border rounded" onSubmit={handleSubmit}>
                    <div className="row mb-3 ms-2 me-2 border-bottom">
                        <div className="col-1"></div>
                        <div className="col-3 d-flex  justify-content-start"><h5>Basic Details</h5></div>
                                            <div className="col-4"></div>
                        <div className="col-4"></div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <label className="d-flex justify-content-end align-items-center text-end">First Name:</label>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <input className="form-control form-control-sm" type="text" value={details.basicDetails.firstName} 
                            onChange={(e) => setDetails({...details, basicDetails: {...details.basicDetails, firstName: e.target.value}})}></input>
                        </div>
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <label className="d-flex justify-content-end align-items-center text-end">Last Name:</label>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <input className="form-control form-control-sm" type="text" value={details.basicDetails.lastName} 
                            onChange={(e) => setDetails({...details, basicDetails: {...details.basicDetails, lastName: e.target.value}})}></input>
                        </div>
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <label className="d-flex justify-content-end align-items-center text-end">Age:</label>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <input className="form-control form-control-sm" type="number" min={0} max={120} value={details.basicDetails.age} 
                            onChange={(e) => setDetails({...details, basicDetails: {...details.basicDetails, age: e.target.value}})}></input>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <label className="d-flex justify-content-end align-items-center text-end">Position:</label>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <input className="form-control form-control-sm" type="text" value={details.basicDetails.position} 
                            onChange={(e) => setDetails({...details, basicDetails: {...details.basicDetails, position: e.target.value}})}></input>
                        </div>
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <label className="d-flex justify-content-end align-items-center text-end">Office:</label>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <input className="form-control form-control-sm" type="text" value={details.basicDetails.office} 
                            onChange={(e) => setDetails({...details, basicDetails: {...details.basicDetails, office: e.target.value}})}></input>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <label className="d-flex justify-content-end align-items-center text-end">Start Date:</label>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <input className="form-control form-control-sm" type="date" min="2000-01-01" value={details.basicDetails.startDate} 
                            onChange={(e) => setDetails({...details, basicDetails: {...details.basicDetails, startDate: e.target.value}})}></input>
                        </div>
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <label className="d-flex justify-content-end align-items-center text-end">Salary:</label>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <div className="input-group">
                                <span className="input-group-text">$</span>
                                <input className="form-control form-control-sm" type="number" step={.01} value={details.basicDetails.salary} 
                                onChange={(e) => setDetails({...details, basicDetails: {...details.basicDetails, salary: e.target.value}})}></input>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 mb-3 ms-2 me-2 border-bottom">
                        <div className="col-1"></div>
                        <div className="col-3 d-flex  justify-content-start"><h5>Personal Details</h5></div>
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-8">
                            <div className="container p-0 m-0">
                                <div className="row mb-1">
                                    <div className="col-3 d-flex align-items-center justify-content-end">
                                        <label className="d-flex justify-content-end align-items-center text-end">Address:</label>
                                    </div>
                                    <div className="col-9">
                                        <div className="input-group">
                                            <span className="input-group-text" >Line 1</span>
                                            <input type="text" className="form-control" value={details.personalDetails.address.line1} 
                                            onChange={(e) => setDetails({...details, personalDetails: {...details.personalDetails, address: {...details.personalDetails.address, line1: e.target.value}}})}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-3"></div>
                                    <div className="col-9">
                                        <div className="input-group">
                                            <span className="input-group-text" >Line 2</span>
                                            <input type="text" className="form-control" value={details.personalDetails.address.line2} 
                                            onChange={(e) => setDetails({...details, personalDetails: {...details.personalDetails, address: {...details.personalDetails.address, line2: e.target.value}}})}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-3"></div>
                                    <div className="col-9">
                                        <div className="input-group">
                                            <span className="input-group-text" >City</span>
                                            <input type="text" className="form-control" value={details.personalDetails.address.city} 
                                            onChange={(e) => setDetails({...details, personalDetails: {...details.personalDetails, address: {...details.personalDetails.address, city: e.target.value}}})}></input>
                                            <span className="input-group-text" >Country</span>
                                            <select className="form-control" value={details.personalDetails.address.country.code} 
                                            onChange={(e) => setDetails({...details, personalDetails: {...details.personalDetails, address: {...details.personalDetails.address, country: countries.filter(x => x.code == e.target.value)[0]}}})}>
                                                {countries.map(x => <option key={x.code} value={x.code}>{x.name}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3"></div>
                                    <div className="col-9">
                                        <div className="input-group">
                                            <span className="input-group-text" >Postal code</span>
                                            <input type="text" className="form-control" value={details.personalDetails.address.postalCode} 
                                            onChange={(e) => setDetails({...details, personalDetails: {...details.personalDetails, address: {...details.personalDetails.address, postalCode: e.target.value}}})}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="row mb-3">
                        <div className="col-6">
                            <div className="container p-0 m-0">
                                <div className="row mb-1">
                                    <div className="col-4 d-flex align-items-center justify-content-end">
                                        <label className="d-flex justify-content-end align-items-center text-end">Phone:</label>
                                    </div>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <span className="input-group-text" >Country</span>
                                            <select className="form-control" value={details.personalDetails.phone.country.code} 
                                            onChange={(e) => setDetails({...details, personalDetails: {...details.personalDetails, phone: {...details.personalDetails.phone, country: countries.filter(x => x.code == e.target.value)[0]}}})}>
                                                {countries.map(x => <option key={x.code} value={x.code}>{x.name}</option>)}
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <span className="input-group-text" >{details.personalDetails.phone.country.dial_code}</span>
                                            <input type="text" className="form-control" value={details.personalDetails.phone.number} 
                                            onChange={(e) => setDetails({...details, personalDetails: {...details.personalDetails, phone: {...details.personalDetails.phone, number: e.target.value}}})}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="container p-0 m-0">
                                <div className="row mb-1">
                                    <div className="col-4 d-flex justify-content-end align-items-center ">
                                        <label className="d-flex justify-content-end align-items-center text-end">Email:</label>
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center">
                                        <div className="input-group">
                                            <input type="text" className="form-control" value={details.personalDetails.email.userName} 
                                            onChange={(e) => 
                                            {
                                                if (e.target.value.charAt(e.target.value.length - 1) == '@') employeeEmailDomain.current.focus();
                                                else setDetails({...details, personalDetails: {...details.personalDetails, email: {...details.personalDetails.email, userName: e.target.value}}})
                                            }
                                            }></input>
                                            <span className="input-group-text" >@</span>
                                            <input type="text" className="form-control" value={details.personalDetails.email.domain}  ref={employeeEmailDomain}
                                            onChange={(e) => setDetails({...details, personalDetails: {...details.personalDetails, email: {...details.personalDetails.email, domain: e.target.value}}})}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 mb-3 ms-2 me-2 border-bottom">
                        <div className="col-1"></div>
                        <div className="col-3 d-flex  justify-content-start"><h5>Emergency Contact Details</h5></div>
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-2 d-flex justify-content-end align-items-center ">
                            <label className="d-flex justify-content-end align-items-center text-end">Emergency Contact Given?:</label>
                        </div>
                        <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="emergencyContactRadio" value="true" checked={details.emergencyContactDetails.emergencyContactGiven}
                                onChange={(e) => setDetails({...details, emergencyContactDetails: {...details.emergencyContactDetails, emergencyContactGiven: e.target.value == "true"}})}></input>
                                <label className="form-check-label">Yes</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="emergencyContactRadio" value="false" checked={!details.emergencyContactDetails.emergencyContactGiven}
                                onChange={(e) => setDetails({...details, emergencyContactDetails: {...details.emergencyContactDetails, emergencyContactGiven: e.target.value == "true"}})}></input>
                                <label className="form-check-label">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-2 d-flex justify-content-end align-items-center ">
                            <label className="d-flex justify-content-end align-items-center text-end">Name:</label>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <input className="form-control form-control-sm" type="text" value={details.emergencyContactDetails.name}
                                            onChange={(e) => setDetails({...details, emergencyContactDetails: {...details.emergencyContactDetails, name: e.target.value}})}></input>
                        </div>
                    </div>


                    <div className="row mb-3">
                        <div className="col-6">
                            <div className="container p-0 m-0">
                                <div className="row mb-1">
                                    <div className="col-4 d-flex align-items-center justify-content-end">
                                        <label className="d-flex justify-content-end align-items-center text-end">Phone:</label>
                                    </div>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <span className="input-group-text" >Country</span>
                                            <select className="form-control" value={details.emergencyContactDetails.phone.country.code} 
                                            onChange={(e) => setDetails({...details, emergencyContactDetails: {...details.emergencyContactDetails, phone: {...details.emergencyContactDetails.phone, country: countries.filter(x => x.code == e.target.value)[0]}}})}>
                                                {countries.map(x => <option key={x.code} value={x.code}>{x.name}</option>)}
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-8">
                                        <div className="input-group">
                                            <span className="input-group-text" >+ 1</span>
                                            <input type="text" className="form-control" value={details.emergencyContactDetails.phone.number} 
                                            onChange={(e) => setDetails({...details, emergencyContactDetails: {...details.emergencyContactDetails, phone: {...details.emergencyContactDetails.phone, number: e.target.value}}})}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="container p-0 m-0">
                                <div className="row mb-1">
                                    <div className="col-4 d-flex justify-content-end align-items-center ">
                                        <label className="d-flex justify-content-end align-items-center text-end">Email:</label>
                                    </div>
                                    <div className="col-8 d-flex justify-content-center align-items-center">
                                        <div className="input-group">
                                        <input type="text" className="form-control" value={details.emergencyContactDetails.email.userName} 
                                            onChange={(e) => 
                                            {
                                                if (e.target.value.charAt(e.target.value.length - 1) == '@') emergencyContactEmailDomain.current.focus();
                                                else setDetails({...details, emergencyContactDetails: {...details.emergencyContactDetails, email: {...details.emergencyContactDetails.email, userName: e.target.value}}})
                                            }
                                            }></input>
                                            <span className="input-group-text" >@</span>
                                            <input type="text" className="form-control" value={details.emergencyContactDetails.email.domain}  ref={emergencyContactEmailDomain}
                                            onChange={(e) => setDetails({...details, emergencyContactDetails: {...details.emergencyContactDetails, email: {...details.emergencyContactDetails.email, domain: e.target.value}}})}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-6"></div>
                        <div className="col-5 d-flex justify-content-end align-items-center">
                            <button type="submit" className="btn btn-primary me-1">Save Changes</button>
                            <button type="reset" className="btn btn-danger">Clear Changes</button>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default EmployeeDetails;