var url = null
const editor = ace.edit('editor')
document.getElementById('editor').style.fontSize='16px';
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");
require('ace/ext/language_tools');
editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });


editor.setShowPrintMargin(false);
editor.renderer.setShowGutter(true);
function createUrl(html) {
  var blob = new Blob([html], { type: 'text/html' })
  return URL.createObjectURL(blob)
}


function removeUrl(url) {
  URL.revokeObjectURL(url)
}
function getIframe() {
  var iframe = document.getElementById('iframe')
  return iframe
}

function setIframeUrl(url) {
  var iframe = getIframe()
  iframe.src = url
}

function getEditorCode() {
  return editor.getValue()
}

function buttonclick() {
  var code = getEditorCode()
  removeUrl(url)
  url = createUrl(code)
  setIframeUrl(url)
  
}
// Get the modal
function buttonclick68() {
  var code = getEditorCode()
  removeUrl(url)
  url = createUrl(code)
  window.open(url);
  
}
function download_txt() {
  var save = prompt("Save file as", "Waffle");
  var textToSave = getEditorCode() ;
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
  hiddenElement.target = '_blank';
  hiddenElement.download = save + ".wafer";
  hiddenElement.click();
}

document.getElementById('save').addEventListener('click', download_txt);


function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log(reader.result);
  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}

function launchpreference(){
document.getElementById('frame3').style.display="block";
}
function launchsearch(){
document.getElementById('frame2').style.display="block";
}
function launchconsole(){
document.getElementById('consolediv')
.style.display="block";
}
function closeframe2(){
document.getElementById('frame2').style.display="none"; }
function closeframe3(){
document.getElementById('frame3').style.display="none"; }
function closeconsole(){
document.getElementById('consolediv')
.style.display="none";  
}
if (typeof console  != "undefined") 
    if (typeof console.log != 'undefined')
        console.olog = console.log;
    else
        console.olog = function() {};

console.log = function(message) {
    console.olog(message);
   document.getElementById('console').innerHTML += ('<p>' + message + '</p>');
};
console.error = console.debug = console.info =  console.log;


function monokai(){
editor.setTheme("ace/theme/monokai");  
}
function eclipse(){
  editor.setTheme("ace/theme/eclipse");
}
function chrome(){
  editor.setTheme("ace/theme/chrome");
}
function github(){
  editor.setTheme("ace/theme/github");
}
function xcode(){
  editor.setTheme("ace/theme/xcode");
}
function server(){
  editor.setTheme("ace/theme/sqlserver");
}
function terminal(){
  editor.setTheme("ace/theme/terminal");
}
function chaos(){
  editor.setTheme("ace/theme/chaos");
}
function sublime(){
  editor.setTheme("ace/theme/solarized_dark");
}
function nord(){
  editor.setTheme("ace/theme/nord_dark");
}
function cont(){
var font = document.getElementById('get-font').value;
document.getElementById('editor').style.fontSize= font;
}
