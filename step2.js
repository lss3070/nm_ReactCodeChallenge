class ArrayUtilities {
    static addZeros = (v) =>
      Object.values(v).map((e) => parseInt(e.toString() + 0));
  
    static moreThanFifty = (v) =>
      Object.values(v).filter((e) => parseInt(e) > 50);
  
    static removeFirst = (v) => {
      let array = Object.values(v);
      array.splice(0, 1);
      return array;
    };
  
    static sumAll = (v) => Object.values(v).reduce((c, p) => c + p);
  
    static divide = (v) => Object.assign(v).toString().split("");
  
    /* Your magic here */
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const addZeros = ArrayUtilities.addZeros(numbers);
  console.log(addZeros);
  
  const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
  console.log(moreThanFifty);
  
  const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
  console.log(noFirst);
  
  const sumAll = ArrayUtilities.sumAll(noFirst);
  console.log(sumAll);
  
  const divided = ArrayUtilities.divide(sumAll);
  console.log(divided);
  