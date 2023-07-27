function translateColumnDToEnglish() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     // Specify the range containing the source text (Arabic) you want to translate
    var sourceRange = sheet.getRange("D2:D225001");
    // Specify the target range where the translated text (English) will be written
    var targetRange = sheet.getRange("I2:I225001"); 
  
    var sourceValues = sourceRange.getValues();
    var translatedValues = [];
  
    for (var i = 0; i < sourceValues.length; i++) {
      var sourceText = sourceValues[i][0];

      // Translate from Arabic (ar) to English (en)
      var translatedText = LanguageApp.translate(sourceText, "ar", "en"); 
      // Store the translated text in the array
      translatedValues.push([translatedText]); 
      // Add a delay of 1000 milliseconds (1 second) between translation calls to avoid throttling
      Utilities.sleep(1000); 
    }
  // Write the translated text to the target range (column I)
    targetRange.setValues(translatedValues); 
  }
  