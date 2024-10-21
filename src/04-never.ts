const withoutEnd = () => {
  while(true) {
    console.log("Nunca te rindas!");
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === "string") {
    return "es un string";
  } else if (Array.isArray(input)) {
    return "es un array";
  }
  return fail("not match");
}

console.log(example("hey"));
console.log(example([2, 1, 2, 3, 4]));
console.log(example(121212)); // se detiene aqui 
console.log(example("Hola despues del fail"));
