

function calculateLocal(){

    console.log("calculate local invoked");

    let amount = parseInt(document.getElementById("amount").value);
    console.log("amount: "+ amount);

    let rate = parseInt(document.getElementById("rate").value);
    console.log("rate: "+ rate);

    let tax = (amount*rate)/100; 
    console.log("tax: "+ tax);

    let total = amount+tax; 
    console.log("total: "+ total);

    let content = "Tax amount: "+amount+ ", Total amount: "+ total;
    console.log("content: "+ content);

    document.getElementById("result").innerText = content;

    console.log("*****************");

    // http://51.15.211.168:80/natujenge/swe/demo/
}


function calculateRemote(){

    console.log("calculate remote invoked");

    let amount = parseInt(document.getElementById("amount").value);
    console.log("amount: "+ amount);

    let rate = parseInt(document.getElementById("rate").value);
    console.log("rate: "+ rate);

    //create a request  - JSON object 
    let request = {};
    request.amount = amount;
    request.rate = rate;

    let jsonRequest = JSON.stringify(request); //converts into a JSON string  {"":""} etc..

    console.log("request");
    console.log(jsonRequest);

    send("api/calculate.php", jsonRequest); //origin is same as the index.html - path is similar but add /api/calculate.php 

}


function send(url, request){


    document.getElementById("result").innerHTML = "Loading.... Please wait. "; 
    
    const httpClient = new XMLHttpRequest();

    // Define a callback function
    httpClient.onload = function() {

        //we need to pick the response 
        //use it to affect our page 

        console.log(this.responseText); //http body in JSON string 

        let jsonResponse = JSON.parse(this.responseText);

        let tax = jsonResponse.tax;

        let total = jsonResponse.total;

        document.getElementById("result").innerHTML =
        "<h2>Response from remote.</h2><p>Tax: " + tax + "</p> <p>Total: " + total+"</p>";
    }

    // Send a request
    httpClient.open("POST", url);
    httpClient.send(request);
}