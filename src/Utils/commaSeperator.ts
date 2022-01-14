export const commaSeperator = (numValue: number = 0): string => {
  return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(
    numValue
  );
};
