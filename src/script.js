const htmlButton = document.getElementById("addButton")
const htmlList = document.getElementById("cartList")
const htmlProductInput = document.getElementById("productInput")
const htmlPriceInput = document.getElementById("priceInput")

const cart = []

function UpdateAndShowList()
{
    htmlList.innerHTML = ""

    for (const product of cart)
    {
        const listItem = document.createElement("li")
        listItem.innerHTML = product.product + " - " + product.price + "kr" + " (x" + product.quantity + ")"
        htmlList.appendChild(listItem)
    }
}

htmlButton.addEventListener("click", () =>
{
    const product = htmlProductInput.value
    const price = Number(htmlPriceInput.value)
    let productFound = false

    for (const item of cart)
    {
        if (item.product === product)
        {
            item.price += price
            item.quantity++
            productFound = true
            break;
        }
    }

    if (!productFound)
    {
        cart.push({product, price, quantity: 1})
    }

    UpdateAndShowList()

    htmlPriceInput.value = ""
    htmlProductInput.value = ""
})