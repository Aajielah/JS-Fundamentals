const arg = parseInt(process.argv[2]);

if (isNaN(arg)) {
    console.log("Missing size");
}

let counter = 0;
while (counter < arg) {
  let row = "";
  for (let i = 0; i < arg; i++) {
     row += "X";
    
  }
  console.log(row);
  counter++;
}