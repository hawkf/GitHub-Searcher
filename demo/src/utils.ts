export const findSubstring = (text: string, substring: string): boolean => {
  if(text.indexOf(substring) > -1) {
    return true;
  }
   return false;
}