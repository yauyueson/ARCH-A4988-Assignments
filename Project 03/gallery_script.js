// IMPORT XLSX DATA

fetch("https://drive.google.com/file/d/1BLEc6Ifkmt8vCCE62U0sIvteAb2_0Mtc/view?usp=sharing")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data){
    console.log(data);
  })
