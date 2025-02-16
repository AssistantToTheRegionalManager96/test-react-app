import { NextResponse } from "next/server";
import { promises as fs } from 'fs';


// To handle a GET request to /api
export async function GET(request, {params}) {
    try {
      var id = parseInt(params.id);

      const employeesFile = await fs.readFile(process.cwd() + '/data/employees.json', 'utf8');
      const personalDetailsFile = await fs.readFile(process.cwd() + '/data/employeePersonalDetails.json', 'utf8');
      const emergencyDetailsFile = await fs.readFile(process.cwd() + '/data/emergencyContactDetails.json', 'utf8');

      const employeeArray = JSON.parse(employeesFile);
      const personalDetailsArray = JSON.parse(personalDetailsFile);
      const emergencyContactDetailsArray = JSON.parse(emergencyDetailsFile);
  
      const basicDetails = employeeArray.filter(x => x.id == id)[0];
      var personalDetails = {};
      var emergencyContactDetails = {};
  
      // Check arrays
      if (personalDetailsArray.length == 0 || personalDetailsArray.filter(x => x.id == id).length == 0) {
        personalDetails = {
          address: {
            id: id,
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
        }
      } 
      else personalDetails = personalDetailsArray.filter(x => x.id == id)[0];
  
      if (emergencyContactDetailsArray.length == 0 || emergencyContactDetailsArray.filter(x => x.id == id).length == 0) {
        emergencyContactDetails = {
          id: id,
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
      }
      else emergencyContactDetails = emergencyContactDetailsArray.filter(x => x.id == id)[0];
  
      var response = {
        basicDetails: basicDetails,
        personalDetails: personalDetails,
        emergencyContactDetails: emergencyContactDetails
      }
  
      return NextResponse.json(response, { status: 200 });
    }
    catch (error)
    { 
      return NextResponse.json(error, { status: 500 })
    }

  }