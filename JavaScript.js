// prompt user for what flavors they want 
const userInputString = prompt(
    "Please Select the flavors That You Want.",
    "Vanilla,Vanilla,Vanilla,Strawberry,Coffee,Coffee"
);
// Split the string of Flavors into an array of strings.
const input = prompt(
    "Please enter froyo flvors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
  const flavors = input.split(",");
  console.log(flavors);
  
  for (let i = 0; i < flavors.length; i++) {
    console.log(flavors[i]);
  }
  
  const count = {};
  
  for (const element of flavors) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  console.log(count);