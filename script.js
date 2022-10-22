let myLibrary =[

];
var list = document.createElement('ul');
document.getElementById("Preview").appendChild(list);
list.setAttribute("id", "list");
function book(name,author,pages,status,key){
    this.name=name,
    this.author=author,
    this.pages=pages,
    this.status=status,
    this.id =key
}
const remove=(key)=>{
    console.log(key)
    var a =document.getElementById("list");
    var item = document.getElementById(key);
    a.removeChild(item);
    const indexOfObject = myLibrary.findIndex(object => {
        return object.id === key;
      });
      myLibrary.splice(indexOfObject, 1);
    console.log(myLibrary);
}

function createBook(){
    let nameValue = document.getElementById("nameInput").value;
    let authorValue = document.getElementById("authorInput").value;
    let pagesValue = document.getElementById("pageseInput").value;
    let statusValue = document.getElementById("statusInput").checked;
    if(nameValue !="" && authorValue!="" && pagesValue!=""){
        let newBook = new book(nameValue,authorValue,pagesValue,statusValue);
        console.log(newBook.name);
        myLibrary.push(newBook);
        
            list.innerHTML = myLibrary.map((book,key)=>{
                if(book.status==true){
                    return "<div id="+key+" class ='bookCard'><div id='name'><h1>"+book.name+"</h1><button onClick='remove("+key+")'>REmove</button></div><br><div id='description'><h3>"+book.author+"</h3><br>"+book.pages+"<br><input type='checkbox' checked></input></div></div>"      
                }else{
                    return "<div id="+key+" class ='bookCard'><div id='name'><h1>"+book.name+"</h1><button onClick='remove("+key+")'>REmove</button></div><br><div id='description'><h3>"+book.author+"</h3><br>"+book.pages+"<br><input type='checkbox'></input></div></div>"

                }
            }).join("");

            document.getElementById("nameInput").value = '';
            document.getElementById("authorInput").value="";
            document.getElementById("pageseInput").value="";
        
        console.log(myLibrary);
    }else return;

}