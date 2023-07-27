function translateColumnDToEnglish() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var sourceRange = sheet.getRange("D2:D225001"); // Specify the range containing the source text (Arabic) you want to translate
    var targetRange = sheet.getRange("I2:I225001"); // Specify the target range where the translated text (English) will be written
  
    var sourceValues = sourceRange.getValues();
    var translatedValues = [];
    var translator = LanguageApp.getService().translate(); // Create a Translator object to use the LanguageApp service
  
    for (var i = 0; i < sourceValues.length; i++) {
      var sourceText = sourceValues[i][0];
      var translatedText = translator.translate(sourceText, "ar", "en"); // Translate from Arabic (ar) to English (en)
      translatedValues.push([translatedText]); // Store the translated text in the array
      Utilities.sleep(1000); // Add a delay of 1000 milliseconds (1 second) between translation calls to avoid throttling
    }
  
    targetRange.setValues(translatedValues); // Write the translated text to the target range (column I)
  }
  