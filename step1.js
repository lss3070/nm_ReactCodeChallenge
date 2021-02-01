class ObjectUtilities {
    /* Your magic here */
  
    constructor() {}
  
    static mergeObjects = (objA, objB) => ({ ...objA, ...objB });
  
    static removePassword(a) {
      let temp = Object.assign({ ...a });
      delete temp.password;
      return { ...temp };
    }
  
    static freezeObj(a) {
      return Object.freeze(a);
    }
    static getOnlyValues(a) {
      return Object.values(a);
    }
    static getOnlyProperties(a) {
      return Object.keys(a);
    }
  }
  
  const objA = {
    name: "Nicolas",
    favFood: "Kimchi"
  };
  
  const objB = {
    password: "12345"
  };
  
  const user = ObjectUtilities.mergeObjects(objA, objB);
  console.log(user);
  
  const cleanUser = ObjectUtilities.removePassword(user);
  console.log(cleanUser);
  
  const frozenUser = ObjectUtilities.freezeObj(cleanUser);
  
  const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
  console.log(onlyValues);
  
  const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
  console.log(onlyProperties);
  
  frozenUser.name = "Hello!"; // This should show an error
  