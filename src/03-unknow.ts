let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];

let isNew: boolean = anyVar;

anyVar.doWhatever();

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;

// unknowVar.doSomething();
if(typeof unknowVar === "string") {
  unknowVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
