// let accordions=document.querySelectorAll('.accordion-wrapper .accordion');

// accordions.forEach((acco)=>{

//     acco.onclick=()=>{
//         accordions.forEach((subContent)=>{
//             subContent.classList.remove("active")
//         });
//         acco.classList.add("active");
//     }
// })

let accordions = document.querySelectorAll('.accordion-wrapper .accordion');

accordions.forEach((acco) => {
  acco.onclick = () => {
    acco.classList.toggle("active");

    // OPTIONAL:If the clicked accordion is active, close all others

    // if (acco.classList.contains("active")) {
    //   accordions.forEach((otherAcco) => {
    //     if (otherAcco !== acco) {
    //       otherAcco.classList.remove("active");
    //     }
    //   });
    // }
    
  }    

});
