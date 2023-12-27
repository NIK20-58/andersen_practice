function ObjectDeepCopy(element) {
  
  if (typeof element !== "object" || element === null) {
    return element;
  }

  const newObj = Array.isArray(element) ? [] : {};

  for (const [key, value] of Object.entries(element)) {
    newObj[key] = ObjectDeepCopy(value);
  }
  return newObj;
}
