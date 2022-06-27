export const parseInputValueAsInteger = (val, defaultValue = 0) => {
  const safeInputString = typeof val === "string" && val.length > 0 ? val : "0";
  return parseInt(safeInputString);
};
