export const COMBINATION_SYMBOLS = 'characterCombination';
export const ALPHABET_REGULAR =  /^[A-Za-z0-9]*$/
export const SYNCFUSION_COMPONENTS = {
  Input: 'ejs-textbox',
  Richtexteditor: 'ejs-richtexteditor'
};

  /**
   * Tables of correspondence of key codes and alphabetic characters
   *
   */
export const ArabicAlphabetMap = new Map([
  [81, '0636'],
  [87, '0635'],
  [69, '062B'],
  [82, '0642'],
  [84, '0641'],
  [89, '063A'],
  [85, '0639'],
  [73, '0647'],
  [79, '062E'],
  [80, '062D'],
  [219, '062C'],
  [221, '062F'],
  [65, '0634'],
  [83, '0633'],
  [68, '064A'],
  [70, '0628'],
  [71, '0644'],
  [72, '0627'],
  [74, '062A'],
  [75, '0646'],
  [76, '0645'],
  [186, '0643'],
  [222, '0637'],
  [90, '0626'],
  [88, '0621'],
  [67, '0624'],
  [86, '0631'],
  [66, COMBINATION_SYMBOLS],
  [78, '0649'],
  [77, '0629'],
  [188, '0648'],
  [190, '0632'],
  [191, '0638'],
  [19111, '0638'],
  [49, '0661'],
  [50, '0662'],
  [51, '0663'],
  [52, '0664'],
  [53, '0665'],
  [54, '0666'],
  [55, '0667'],
  [56, '0668'],
  [57, '0669'],
  [48, '0660'],
  [189, '002D'],
  [187, '003D'],
]);

export const IsShiftDownArabicAlphabetMap = new Map([
  [78, '0622'],
  [81, '064E'],
  [87, '064B'],
  [69, '064F'],
  [82, '064C'],
  [84, 'FEF9'],
  [89, '0625'],
  [85, '2019'],
  [73, '00F7'],
  [79, '00D7'],
  [80, '061B'],
  [219, '003E'],
  [221, '003C'],
  [220, '007C'],
  [65, '0650'],
  [83, '064D'],
  [68, '005D'],
  [70, '005B'],
  [71, COMBINATION_SYMBOLS],
  [72, '0623'],
  [74, '0640'],
  [75, '060C'],
  [76, '002F'],
  [186, '003A'],
  [222, '0022'],
  [90, '007E'],
  [88, '0652'],
  [67, '007B'],
  [86, '007D'],
  [66, COMBINATION_SYMBOLS],
  [78, '0622'],
  [77, '2018'],
  [188, '002C'],
  [190, '002E'],
  [5555, '061F'],
  [191, '061F'],
]);
