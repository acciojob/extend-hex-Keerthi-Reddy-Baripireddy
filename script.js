const extendHex = (shortHex) => {
  // Remove # if it exists
  shortHex = shortHex.replace("#", "");

  // Split the short hex code into individual color components
  const red = shortHex[0];
  const green = shortHex[1];
  const blue = shortHex[2];

  // Extend each color component to two  characters and concatenate them to form the full hex code
  const fullHex = `#${red}${red}${green}${green}${blue}${blue}`;

  return shortHex.includes("#") ? fullHex.toUpperCase() : fullHex.toLowerCase();
};

// Example usage
const shortHexInput = prompt("Enter Short Hex:");
alert(extendHex(shortHexInput));
