// *create a new scanner in element of id reader with specified height,width,fps
const scanner = new Html5QrcodeScanner("reader", {
  qrbox: {
    width: 500,
    height: 500,
  },
  fps: 20,
});

// *render the scanner with two arguments one for success and another for error
scanner.render(success, error);

//*declare success function with parameter result which shows the result
function success(result) {
  // *create a new element to show result in id result
  document.getElementById("result").innerHTML = `
    <h2>Success!</h2>
    <p>${result}</p>
    `;

  // * clears the scanner
  scanner.clear();
  document.getElementById("reader").remove();
}

function error(err) {
  console.error(err);
}
