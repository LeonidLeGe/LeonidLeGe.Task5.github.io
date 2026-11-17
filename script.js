document.addEventListener("DOMContentLoaded", function() {
    var productSelect = document.getElementById("product");
    var amountInput = document.getElementById("amount");
    var calculateBtn = document.getElementById("calculate-btn");
    var resultDiv = document.getElementById("result");

    function calculateOrder() {
        var amountStr = amountInput.value.trim();
        var validPattern = /^[1-9][0-9]*$/;
        var price;
        var amount;
        var total;

        if (!validPattern.test(amountStr)) {
            resultDiv.textContent = "Ошибка: введите целое положительное число."
            amountInput.style.backgroundColor = "#ff3333";
            return
        }

        amountInput.style.backgroundColor = "";

        price = parseInt(productSelect.value, 10);
        amount = parseInt(amountStr, 10);
        total = price * amount;

        resultDiv.textContent = "Стоимость заказа: " + total + " руб.";

    }

    calculateBtn.addEventListener("click", calculateOrder);
});