enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES;
}

const rubUser: User = {
  username: "rubson",
  role: ROLES.ADMIN
}

enum Estaciones {
  primavera = "Primavera",
  verano = "Verano",
  otonio = "Otoño",
  invierno = "Invierno",
}

const favEstacion = (est: Estaciones): string => {
  return `Mi estación fav es: ${est}`;
};
console.log(favEstacion("verano")); // no se puede mandar un string suelto
console.log(favEstacion(Estaciones.verano));
