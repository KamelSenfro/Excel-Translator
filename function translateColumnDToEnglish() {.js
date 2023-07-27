function translateColumnDToEnglish() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sourceRange = sheet.getRange("D2:D30"); // Change the range as needed
  var targetRange = sheet.getRange("I2:I30"); // Change the range as needed

  var sourceValues = sourceRange.getValues();
  var translatedValues = [];

  for (var i = 0; i < sourceValues.length; i++) {
    var sourceText = sourceValues[i][0];
    var translatedText = LanguageApp.translate(sourceText, "ar", "en"); // Translate from Arabic (ar) to English (en)
    translatedValues.push([translatedText]);
  }

  targetRange.setValues(translatedValues);
}
