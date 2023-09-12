let payMonthlyButton = document.getElementById("payMonthlyButton");
let payYearlyButton = document.getElementById("payYearlyButton");

let basicButton = document.getElementById("basicButton");
let shopifyButton = document.getElementById("shopifyButton");
let advancedButton = document.getElementById("advancedButton");

let basicContainer = document.getElementById("basicContainer");
let shopifyContainer = document.getElementById("shopifyContainer");
let advancedContainer = document.getElementById("advancedContainer");

let basicPrice = document.getElementById("basicPrice");
let shopifyPrice = document.getElementById("shopifyPrice");
let advancedPrice = document.getElementById("advancedPrice");

let buyBasic = document.getElementById("buyBasic");
let buyShopify = document.getElementById("buyShopify");
let buyAdvanced = document.getElementById("buyAdvanced");

payYearlyButton.style.backgroundColor = "white";
payYearlyButton.style.color = "black";

basicButton.style.borderTop = "3px solid lightgreen";
shopifyButton.style.borderTop = "1px solid silver";
advancedButton.style.borderTop = "1px solid silver";

shopifyContainer.style.border = 0;
advancedContainer.style.border = 0;

function myFunction(x) {
    if (x.matches) {
        basicContainer.style.display = "block";
        shopifyContainer.style.display = "none";
        advancedContainer.style.display = "none";
    } else {
        basicContainer.style.display = "block";
        shopifyContainer.style.display = "block";
        advancedContainer.style.display = "block";
    }
}

var x = window.matchMedia("(max-width: 900px)");
myFunction(x);
x.addListener(myFunction);

let originalBasicPrice = 1994;
let originalShopifyPrice = 7447;
let originalAdvancedPrice = 30164;

basicPrice.innerHTML = originalBasicPrice.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR'
});
shopifyPrice.innerHTML = originalShopifyPrice.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR'
});
advancedPrice.innerHTML = originalAdvancedPrice.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR'
});

payMonthlyButton.addEventListener("click", () => {
    basicPrice.innerHTML = originalBasicPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
    shopifyPrice.innerHTML = originalShopifyPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
    advancedPrice.innerHTML = originalAdvancedPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
});

payMonthlyButton.addEventListener("click", () => {
    payMonthlyButton.style.backgroundColor = "black";
    payMonthlyButton.style.color = "white";
    payYearlyButton.style.backgroundColor = "white";
    payYearlyButton.style.color = "black";

    let originalBasicPrice = 1994;
    let originalShopifyPrice = 7447;
    let originalAdvancedPrice = 30164;

    basicPrice.innerHTML = originalBasicPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
    shopifyPrice.innerHTML = originalShopifyPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
    advancedPrice.innerHTML = originalAdvancedPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
});

payYearlyButton.addEventListener("click", () => {
    payMonthlyButton.style.backgroundColor = "white";
    payMonthlyButton.style.color = "black";
    payYearlyButton.style.backgroundColor = "black";
    payYearlyButton.style.color = "white";

    let originalBasicPrice = 1994;
    let originalShopifyPrice = 7447;
    let originalAdvancedPrice = 30164;

    originalBasicPrice = originalBasicPrice - (originalBasicPrice / 100) * 25;
    originalShopifyPrice = originalShopifyPrice - (originalShopifyPrice / 100) * 25;
    originalAdvancedPrice = originalAdvancedPrice - (originalAdvancedPrice / 100) * 25;

    basicPrice.innerHTML = originalBasicPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
    shopifyPrice.innerHTML = originalShopifyPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
    advancedPrice.innerHTML = originalAdvancedPrice.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
});

basicButton.addEventListener("click", () => {
    basicButton.style.borderTop = "3px solid lightgreen";
    shopifyButton.style.borderTop = "1px solid silver";
    advancedButton.style.borderTop = "1px solid silver";

    function myFunction(x) {
        if (x.matches) {
            basicContainer.style.display = "block";
            shopifyContainer.style.display = "none";
            advancedContainer.style.display = "none";
        } else {
            basicContainer.style.display = "block";
            shopifyContainer.style.display = "block";
            advancedContainer.style.display = "block";
        }
    }

    var x = window.matchMedia("(max-width: 900px)");
    myFunction(x);
    x.addListener(myFunction);
});

shopifyButton.addEventListener("click", () => {
    basicButton.style.borderTop = "1px solid silver";
    shopifyButton.style.borderTop = "3px solid lightgreen";
    advancedButton.style.borderTop = "1px solid silver";

    function myFunction(x) {
        if (x.matches) {
            basicContainer.style.display = "none";
            shopifyContainer.style.display = "block";
            advancedContainer.style.display = "none";
        } else {
            basicContainer.style.display = "block";
            shopifyContainer.style.display = "block";
            advancedContainer.style.display = "block";
        }
    }

    var x = window.matchMedia("(max-width: 900px)");
    myFunction(x);
    x.addListener(myFunction);
});

advancedButton.addEventListener("click", () => {
    basicButton.style.borderTop = "1px solid silver";
    shopifyButton.style.borderTop = "1px solid silver";
    advancedButton.style.borderTop = "3px solid lightgreen";

    function myFunction(x) {
        if (x.matches) {
            basicContainer.style.display = "none";
            shopifyContainer.style.display = "none";
            advancedContainer.style.display = "block";
        } else {
            basicContainer.style.display = "block";
            shopifyContainer.style.display = "block";
            advancedContainer.style.display = "block";
        }
    }

    var x = window.matchMedia("(max-width: 900px)");
    myFunction(x);
    x.addListener(myFunction);
});

buyBasic.addEventListener("click", () => {
    function myFunction(x) {
        if (x.matches) {
            basicContainer.style.border = 0;
            shopifyContainer.style.border = 0;
            advancedContainer.style.border = 0;
        } else {
            basicContainer.style.border = "2px solid skyblue";
            shopifyContainer.style.border = 0;
            advancedContainer.style.border = 0;
        }
    }

    var x = window.matchMedia("(max-width: 900px)");
    myFunction(x);
    x.addListener(myFunction);
});

buyShopify.addEventListener("click", () => {
    function myFunction(x) {
        if (x.matches) {
            basicContainer.style.border = 0;
            shopifyContainer.style.border = 0;
            advancedContainer.style.border = 0;
        } else {
            basicContainer.style.border = 0;
            shopifyContainer.style.border = "2px solid skyblue";
            advancedContainer.style.border = 0;
        }
    }

    var x = window.matchMedia("(max-width: 900px)");
    myFunction(x);
    x.addListener(myFunction);
});

buyAdvanced.addEventListener("click", () => {
    function myFunction(x) {
        if (x.matches) {
            basicContainer.style.border = 0;
            shopifyContainer.style.border = 0;
            advancedContainer.style.border = 0;
        } else {
            basicContainer.style.border = 0
            shopifyContainer.style.border = 0;
            advancedContainer.style.border = "2px solid skyblue";
        }
    }

    var x = window.matchMedia("(max-width: 900px)");
    myFunction(x);
    x.addListener(myFunction);
});