// console.log('File Loaded');

//handle events in javascript
// DOM Event Handler

// console.log(document);
// console.log(document.getElementById('btn'));

var btn = document.getElementById('btn');
// console.log(btn);

// btn.onclick = function(){
//     console.log('Clicked 1');
// }

btn.onclick = function(){
    // console.log('Clicked 2');
    var textBox = document.getElementById('pancardText');
    // console.log(textBox);
    // console.log(textBox.value);
    // console.log(textBox.value.toUpperCase());

    // var regPancard = /^[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][0-9][0-9][0-9][0-9][a-zA-Z]$/;
    var regPancard = /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]$/;

    // console.log(regPancard);
    var ansPancard = regPancard.test(textBox.value);
    // console.log(ansPancard);

    var para = document.getElementById('para');
    // console.log(para);

    var msg = "";
    var classValue = "";
    if(ansPancard)
    {
        msg = "Valid Pancard";
        classValue = "alert  alert-success";
    }
    else
    {
        msg = "Invalid Pancard";
        classValue = "alert  alert-danger";
        textBox.value = "";
        textBox.focus();
    }   

    para.innerText = msg;
    para.className = classValue;
}