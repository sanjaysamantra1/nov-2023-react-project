import React from "react";
import Swal from "sweetalert2";

export default function SweetAlertDemo() {
  let openAlert = function () {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };
  let openConfirmation = function () {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <>
      <div>SweetAlertDemo</div>
      <button onClick={openAlert} className="m-1">Click me</button>
      <button onClick={openConfirmation}>Click me-2</button>
    </>
  );
}
