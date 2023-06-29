const api_1 = document.getElementById("api-1")
const api_2 = document.getElementById("api-2")
const api_3 = document.getElementById("api-3")
const api_4 = document.getElementById("api-4")
const api_5 = document.getElementById("api-5")

api_1.addEventListener("click",async()=>{
    alert("Please go to the console for output")
    console.log("Products API Data")
    const resp = await fetch("https://fakestoreapi.com/products")
    const jsonData = await resp.json();
    console.log(jsonData)
})

api_2.addEventListener("click",async()=>{
    alert("Please go to the console for output")
    console.log("Employee API Data")
    const resp = await fetch("https://dummy.restapiexample.com/api/v1/employees")
    const jsonData = await resp.json();
    console.log(jsonData.data)
})

api_3.addEventListener("click",async()=>{
    alert("Please go to the console for output")
    console.log("Quote API Data")
    const resp = await fetch("https://dummyjson.com/quotes")
    const jsonData = await resp.json();
    console.log(jsonData.quotes)
})

api_4.addEventListener("click",async()=>{
    alert("Please go to the console for output")
    console.log("Photo API Data")
    const resp = await fetch("https://jsonplaceholder.typicode.com/photos")
    const jsonData = await resp.json();
    console.log(jsonData)
})

api_5.addEventListener("click",async()=>{
    alert("Please go to the console for output")
    console.log("Airline Passenger API Data")
    const resp = await fetch("https://api.instantwebtools.net/v1/passenger?page=0&size=10")
    const jsonData = await resp.json();
    console.log(jsonData.data)
})