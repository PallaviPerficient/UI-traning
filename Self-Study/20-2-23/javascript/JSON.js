const fetchDta = function(){
    let fetchRes= fetch('https://dummyjson.com/products/1');
    fetchRes.then(res =>
    res.json()).then(data => {
      //  for(let i=0;i<data.length;i++){
            document.getElementsByClassName("appendData")[0].innerHTML = `<div class="column">
            <div class="Card">
                <h4>ID :`+data.id+`</h4>
                <h3>Title :`+data.title+`</h3>
                <h4>Description : `+data.description+`</h4>
                <h4>Category : `+data.category+`</h4>
                <h4>Price : `+data.price+`</h4>
            </div>
            </div>`;
     //  }
    });
}
fetchDta();
