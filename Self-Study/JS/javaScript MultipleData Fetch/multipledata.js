const fetchDta = function () {
    let fetchRes = fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    fetchRes.then(res =>
        res.json()).then(data => {
            console.log("data",data);
            for (let i = 0; i < data.data.length; i++) {
                var element = document.createElement('div')
                element.className = "column";
                element.innerHTML = `<div class="Card">
                    <h4>Id : `+ data.data[i]['ID Nation'] + `</h4>
                    <h3>Nation : `+ data.data[i]['Nation'] + `</h3>
                    <h4>ID Year : `+ data.data[i]['ID Year'] + `</h4>
                    <h4>Population : `+ data.data[i]['Population'] + `</h4>
                    <h4>Year : `+ data.data[i]['Year'] + `</h4>
                </div>`
                document.getElementsByClassName("appendData")[0].appendChild(element)
            }
        });
}
fetchDta();
