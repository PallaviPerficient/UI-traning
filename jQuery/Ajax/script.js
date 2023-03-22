function ajax(){
    let url='https://dummyjson.com/products/1';
    $.ajax({
        url: url,
        type: "GET",
        success: function (data, status) {
          if (data.length == 0) {
            console.log(data.length);
          } else {
            console.log("data",data);
          }
        },
        error: function (data, status) {
            console.log(data);
            fallback();
        },
    });
}

$(document).ready(function() {
  ajax();
});

