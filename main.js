const textarea = document.querySelector(".textarea");
const fileNameInput = document.querySelector(".Filename");
const selectMenu = document.querySelector(" .selectMenu");
const saveBtn = document.querySelector(".save-btn");

function selectOption(){
   const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Generate As ${selectedFormat.split(" ")[0]} File`;
 }
function Generate(){
  if(textarea.value!=""){
    if(fileNameInput.value!=""){
        const blob = new Blob([textarea.value], {type: selectMenu.value});
        const fileUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = fileNameInput.value;
        link.href = fileUrl;
        link.click();
      }
      else{
        alert('Enter Your File Name');
      }
    }
    else{
      alert('Enter Your Text');
    }
}
