let list = [{ computer : 'HP', price : 35000, quantity : 2},
{ computer : 'Asus', price : 50000, quantity : 1},
{ computer : 'Dell', price : 45000, quantity : 4},
{ computer : 'Lenovo', price : 40000, quantity : 3}]

let tableId = document.getElementById('tableId')
tableId.style.textAlign="center"
list.forEach(obj=> {
    let row = document.createElement('tr')
    let computer = document.createElement('td')
    let price = document.createElement('td')
    let quantity = document.createElement('td')
    let total = document.createElement('td')
    computer.appendChild(document.createTextNode(obj.computer))
    price.appendChild(document.createTextNode(obj.price))
    quantity.appendChild(document.createTextNode(obj.quantity))
    total.appendChild(document.createTextNode((obj.price * obj.quantity)))
    row.appendChild(computer)
    row.appendChild(price)
    row.appendChild(quantity)
    row.appendChild(total)
    tableId.appendChild(row)
})