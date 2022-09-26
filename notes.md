
Challenge:
    User input:
        + amount - e.g. 100 
        + rate - VAT e.g. 16

    Challenge - compute VAT and total
        tax = amount * rate/100 = 100*16/100 = 16 
        total = tax + amount = 16 + 100  = 116 


Option 1: previously, Used JS to do computation (on the client - client side scripting) 

Option 2: We do the computations on the server (via API)
    Create a basic API that will receive data from the client, compute and return the answer


How do i send the data and in what format? 

    JSON - JavaScript Object Notation [open standard of putting data into objects] 

    Data in the request:
        amount 
        rate 

    Data in the response:
        tax 
        total 

Solutions: 

Option 1: custom way of sending data to another server (data transfer object - dto) 

    Request:
        amount|rate <--- crude way 
        e.g. 
            100|16 


        e.g. 15|16 <-- 

    Response:
        tax|amont 
        e.g. 16|116 



Option 2: JSON 

    Request:
    {
        "amount": 200,
        "rate": 16 
    }


    Response:
    {
        "tax": 32
        "total": 232 
    }

Option 2: XML 

    Request:
    <request>
        <amount>200</amount>
        <rate>16</rate>
    </request>

    Response:
    <response>
        <tax>32</tax>
        <total>232</total>
    </response>






POST /natujenge/swe/demo/api/calculate.php HTTP/1.1
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: a6ecabaf-2a11-4e53-9448-836c7a0c0080
Host: 51.15.211.168
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 37

{
    "amount":2000,
    "rate": 16
}



HTTP/1.1 200 OK
Date: Wed, 21 Sep 2022 07:45:08 GMT
Server: Apache/2.4.6 (CentOS) PHP/7.4.29
X-Powered-By: PHP/7.4.29
Content-Length: 24
Keep-Alive: timeout=5, max=100
Connection: Keep-Alive
Content-Type: application/json; charset=UTF-8

{"tax":320,"total":2320}



POST /natujenge/swe/demo/api/calculate1.php HTTP/1.1
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 57c5fca8-8762-4c8f-bb39-0dc63b7afcc2
Host: 51.15.211.168
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 37

{
    "amount":2000,
    "rate": 16
}

HTTP/1.1 404 Not Found
Date: Wed, 21 Sep 2022 07:50:12 GMT
Server: Apache/2.4.6 (CentOS) PHP/7.4.29
Content-Length: 235
Keep-Alive: timeout=5, max=100
Connection: Keep-Alive
Content-Type: text/html; charset=iso-8859-1

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>404 Not Found</title>
</head><body>
<h1>Not Found</h1>
<p>The requested URL /natujenge/swe/demo/api/calculate1.php was not found on this server.</p>
</body></html>


3c21444f43545950452048544d4c205055424c494320222d2f2f494554462f2f4454442048544d4c20322e302f2f454e223e0a3c68746d6c3e3c686561643e0a3c7469746c653e343034204e6f7420466f756e643c2f7469746c653e0a3c2f686561643e3c626f64793e0a3c68313e4e6f7420466f756e643c2f68313e0a3c703e546865207265717565737465642055524c202f6e6174756a656e67652f7377652f64656d6f2f6170692f63616c63756c617465312e70687020776173206e6f7420666f756e64206f6e2074686973207365727665722e3c2f703e0a3c2f626f64793e3c2f68746d6c3e0a <-- 470 nibbles (2 nibble is 1 byte) = 235 bytes 


Character encoding:
    ASCII -extended ASCII
    UTF-8 <-- 1 character can be represented as 1 byte, 2 bytes or .... 8 bytes... 