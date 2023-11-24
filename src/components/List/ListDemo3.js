import React from "react";

export default function ListDemo3() {
  let employees = [
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 104, name: "deepak", sal: 8000 },
    { eId: 103, name: "ranjan", sal: 7000 },
    { eId: 102, name: "manoj", sal: 9000 },
  ];
  let headers = Object.keys(employees[0]);
  return (
    <>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {headers.map((header, ind) => {
              return <th key={ind}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, ind) => {
            return (
              <tr key={ind}>
                {/* <td>{emp.eId}</td>
                    <td>{emp.name}</td>
                    <td>{emp.sal}</td> */}
                {Object.values(emp).map((value, ind) => {
                  return <td key={ind}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
