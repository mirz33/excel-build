
    
function init() {
  displayLastUpdated();
  getExcels();
}
function displayLastUpdated() {
  var lastUpdated = new Date(document.lastModified);
  var formattedDate = lastUpdated.toLocaleDateString();
  var formattedTime = lastUpdated.toLocaleTimeString();
  var displayString = 'Last Updated: ' + formattedDate + ' ' + formattedTime;
  document.getElementById('lastUpdated').textContent = displayString;
}
function handleFile(e) {
    console.log('changed');
  e.preventDefault();
  var files = e.target.files;
  var i, f;
  for (i = 0, f = files[i]; i !== files.length; ++i) {
    var reader = new FileReader();
    var name = f.name;
    reader.onload = function (e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, { type: 'array' });
      var sheetName = workbook.SheetNames[0];
      var sheet = workbook.Sheets[sheetName];
      var html = XLSX.utils.sheet_to_html(sheet);
      document.getElementById('excelContainer').innerHTML = html;
    };
    reader.readAsArrayBuffer(f);
  }
}
document.getElementById('file').addEventListener('change', handleFile, false);
