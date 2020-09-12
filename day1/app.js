let list = [{ computer : 'HP', price : 35000, quantity : 2},
{ computer : 'Asus', price : 50000, quantity : 1},
{ computer : 'Dell', price : 45000, quantity : 4}]

let tableId = document.getElementById('tableId')
tableId.style.textAlign="center"

for (let i = 0; i < list.length; i++) {
    let comp = list[i].computer
    let pr = list[i].price
    let quan = list[i].quantity
    let tot = list[i].price * list[i].quantity

    let row = document.createElement('tr')
    let computer = document.createElement('td')
    let price = document.createElement('td')
    let quantity = document.createElement('td')
    let total = document.createElement('td')
    computer.appendChild(document.createTextNode(comp))
    price.appendChild(document.createTextNode(pr))
    quantity.appendChild(document.createTextNode(quan))
    total.appendChild(document.createTextNode((tot)))
    row.appendChild(computer)
    row.appendChild(price)
    row.appendChild(quantity)
    row.appendChild(total)
    tableId.appendChild(row)
}