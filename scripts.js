const valueDolar = 5.2
const valueEuro = 5.6
const valueBitcoin = 0.0000070

const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const convertValue = () => {
    const inputReais = document.getElementById("value-Reais").value
    const realValueText = document.getElementById("real-value-text")
    const dolarValueText = document.getElementById("value-text")

    if (select.value === "US$ Dólar Americano") {
        dolarValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReais / valueDolar);
    }
    if (select.value === "€$ Euro") {
        dolarValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReais / valueEuro)
    }
    if (select.value === "₿$ BitCoin") {
        dolarValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputReais * valueBitcoin)
    }

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais)

}

changeSelect = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")
    const currencyValue = document.getElementById("value-text")

    if (select.value === "€$ Euro") {
        currencyName.innerHTML = "Euro"
        currencyValue.innerHTML = "€$ 0,00"
        currencyImg.src = "./Assets/Euro.png"
    }
    if (select.value === "₿$ BitCoin") {
        currencyName.innerHTML = "BitCoin"
        currencyValue.innerHTML = "₿$ 0,00"
        currencyImg.src = "./Assets/BitCoin.png"
    }
    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyValue.innerHTML = "US$ 0,00"
        currencyImg.src = "./Assets/USA.png"
    }

    convertValue()
}

button.addEventListener("click", convertValue)
select.addEventListener("change", changeSelect)

