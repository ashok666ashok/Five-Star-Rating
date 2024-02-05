//select all element with the "i" tag and store them in a Nodelist called "stars"
const stars=document.querySelectorAll(".star i");

//Loop trough the "stars" NodeList
stars.forEach((star,index1)=>{
    //add a event listner that runs a function when the "click" event is trigered
    star.addEventListener("click",()=>{
        //loop through the "stars" NodeList Again
        stars.forEach((star,index2)=>{
            //add the "active" class to the clicked star and any stars with a lower index
            //and remove the "active" clas from any stars with a higher index
            index1>=index2?star.classList.add("active"):star.classList.remove("active");
        })
    })
})