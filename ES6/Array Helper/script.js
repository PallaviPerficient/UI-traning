// /FOR EACH Helper
var colors=['red' ,'green' ,'blue'];

colors.forEach(function(color){
    // document.getElementById("demo").innerHTML= color;
    document.write(color + "  ") ;
})

var cars =[
    {name:"abc" ,price:10},
    {name:"b" ,price:20}
];
cars.forEach(function(car){
    console.log(car.name);
    console.log(car.price);

});

const peoples = [
    {name: 'John', age: 23}, 
    {name: 'Andrew', age: 3}, 
    {name: 'Peter', age: 8}, 
    {name: 'Hanna', age: 14}, 
    {name: 'Adam', age: 37}
];

peoples.forEach(function(people){
    if((people.age)<19){
        console.log(people.age);
    }else{
        console.log(people.name);
    }
})


// MAP Helper

var numbers=[1,2,3];
var doublenumber = numbers.map(function(number){
    return number *2;
})
console.log(doublenumber);


///Filter Helper

var products = [
    { name :"banana" , type: "fruit"},
    {name: "potato" , type: "vegetable"}
]

var filterproduct = products.filter(function(product){
    return product.type === "fruit";
})

console.log(filterproduct);


var productdetails = [
    { name :"banana" , type: "fruit" ,quantity : 0, price:1},
    {name: "potato" , type: "vegetable", quantity : 5, price:10},
    {name: "tomato" , type: "vegetable", quantity : 6, price:8}
]

var filterproductdetails = productdetails.filter(function(productdetail){
    return ((productdetail.type === "vegetable") && (productdetail.quantity > 0) && (productdetail.price < 10));
})

console.log(filterproductdetails);

// jiski bhi post id and comment id same hai uski ka comment show krna hai.
var post ={ id: 4,  comment:"hii"}

var comments = [
    {
        commentid :4 ,comment:"hello"
    },
    {
        commentid :5 ,comment:"hey"
    }
]

function commentforpost(post ,comments){
    return comments.filter(function(comment){
        return comment.commentid === post.id
    })
}

console.log(commentforpost(post,comments));