export function createElement(element, className,text, id){
    let elementtoCreate = document.createElement(element);
    elementtoCreate.textContent = text
    elementtoCreate.id = id
    // if(className != []){
    //     className.forEach(element => {
    //     elementtoCreate.classList.add(className)
    //     });
    // }
    if(className != ''){
        className.split(',').forEach(element => {
            elementtoCreate.classList.add(element)
        });
    }
    if(id == ''){
        elementtoCreate.classList.add(className)
        return elementtoCreate;
    }
    return elementtoCreate;

}

export function createImages(className, src){
    let img = document.createElement('img');
    img.classList.add(className);
    img.src = src
    return img;
}

export function setActive(e){
    document.getElementsByClassName('active')[0].classList.toggle('active');
     e.target.classList.toggle('active') ;
}

const validators = {
    required: (element) => element.value.length > 0,
    noNumbers: (element) => element.value.match(/[0-9]/g),
    maxLength: (element) => element.value.length <= 10,
    minLength: (element) => element.value.length >= 1,
  };
  
export function validateElement(element) {
      resetValidation(element)
    const rules = element.dataset.validate.split(" ");
    rules.forEach((rule) => {
      if (validators[rule](element)) {
        return;
      } else {
        markElementInvalid(element, rule);
      }
    });
  }


  
  function markElementInvalid(element, validatorName) {
    element.classList.add("invalid");
    element.setAttribute("aria-invalid", true);
    const feedbackMessage = element.parentNode.querySelector(
      `[data-validation-message=${validatorName}]`
    );
  
    feedbackMessage.classList.add('message-visible');
    feedbackMessage.setAttribute('aria-hidden',false)
  }
  
  let form = document.getElementById("formWeather")

 export function formValidator(){
let form = document.getElementById("formWeather")

  
const formElements = Array.from(form.elements)
  
  formElements.forEach(formElement=>{
      formElement.addEventListener('blur',()=>{
          validateElement(formElement)
      })
  })
}
   

  
  function resetValidation(element){

      element.classList.remove('invalid')
      element.setAttribute('aria-invalid',false)
      element
          .parentNode
        //   .querySelectorAll(["data-validation-message"])
          .querySelectorAll(["small"])

          .forEach(e=>{

              e.classList.remove("message-visible");
              e.setAttribute('aria-hidden',true)
          })
  
  }
  
  
