function scrollToElement(elementSelector, instance = 0) {
   const elements = document.querySelectorAll(elementSelector);
   if (elements.length > instance) {
      elements[instance].scrollIntoView({ behavior: 'smooth' });
   }
}
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

link1.addEventListener('click', () => {
   scrollToElement('.sobre');
})
link2.addEventListener('click', () => {
   scrollToElement('.tl');
})
link3.addEventListener('click', () => {
   scrollToElement('.conhecimento');
})

link4.addEventListener('click', () => {
   scrollToElement('.projetos');
})

document.getElementById("openPdfButton").addEventListener("click", function() {
   // URL do arquivo PDF
   const pdfUrl = "Curriculo.pdf";
   
   // Abre o PDF em uma nova guia
   window.open(pdfUrl, '_blank');
});


document.addEventListener('DOMContentLoaded', () => {
   const cards = document.querySelectorAll('.card');
   cards.forEach(card => {
       card.addEventListener('click', () => {
           card.classList.toggle('is-flipped');
       });
   });
});


// class FormSubmit{
//    constructor(settings){
//       this.settings = settings;
//       this.form  =  document.querySelector(settings.form);
//       this.FormButton = document.querySelector(settings.button);
//       if(this.form){
//          this.url = this.form.getAttribute("action");
//       }
//    }
//    displaySuccess(){
//       this.form.innerHTML = this.setting.success;
//    }

//    displayError(){
//       this.form.innerHTML = this.settings.error;
//    }
//    init(){
//       if(this.form) this.FormButton.addEventListerner("click", ()=>this.displaySuccess());
//       return  this;
//    }
// }

// const formSubmit = new FormSubmit({
// form: "[data-form]",
// button: "[data-button]",
// succcess: "<h1 class='success'>Mensagem enviada</h1>",
// error: "<h1 class='error'>Não foi possível enviar a mensagem</h1>",

// });


