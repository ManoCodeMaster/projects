var popupoverlay=document.querySelector(".popup-overlay")
var popupbook=document.querySelector(".popup-book")
var addbutton=document.querySelector(".add-button")
var cancelbookbutton=document.querySelector(".cancel-book-button")
addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbook.style.display="block"
})
cancelbookbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbook.style.display="none"
})
var addbookbutton=document.querySelector(".add-book-button")
var container=document.querySelector(".container")
var bookname=document.getElementById("book-name")
var bookauthor=document.getElementById("book-author")
var bookdescription=document.getElementById("book-description")
addbookbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML="<h2 style='color:red;'>"+bookname.value+"</h2><h3>"+bookauthor.value+"</h3><p>"+bookdescription.value+"</p><button onclick='deleteBook(event)'>Delete</button>"
    container.append(div)
    popupoverlay.style.display="none"
    popupbook.style.display="none"
})
function deleteBook(event){
    event.target.parentElement.remove()
}