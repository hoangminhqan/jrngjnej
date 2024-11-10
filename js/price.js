window.onload = function() {
    var nf = new Intl.NumberFormat();
    var PriceList = {
        sp1: 3000000,
        sp2: 1750000,
        sp3: 5550000,
        sp4: 1400000,
        sp5: 10900000,
        sp6: 4100000,
        sp7: 14000000,
        sp8: 2600000,
        sp9: 12900000,
        sp10: 18000000,
        sp11: 700000,
        sp12: 800000,
        sp13: 800000,
        sp14: 800000,
        sp15: 380000,
        sp16: 380000
    };

    var discountedPrices = {
        sp1: 2550000,
        sp4: 650000,
        sp7: 12000000,
        sp9: 10000000,
        sp11: 500000,
    };

    for (var productId in PriceList) {
        var priceElement = document.getElementById(productId);
        var priceOldElement = document.getElementById(productId + "-price");
        var priceNewElement = document.getElementById(productId + "-sale");

        if (priceElement) {
            var originalPrice = PriceList[productId];
            var finalPrice = discountedPrices[productId] || originalPrice;

            if (priceOldElement) {
                priceOldElement.innerText = nf.format(originalPrice) + "đ";
                if (discountedPrices[productId]) {
                    priceOldElement.classList.add('price-old');
                } else {
                    priceOldElement.classList.remove('price-old');
                }
            }

            if (priceNewElement) {
                if (discountedPrices[productId]) {
                    priceNewElement.innerText = nf.format(finalPrice) + "đ";
                    priceNewElement.style.display = 'inline';
                    priceNewElement.classList.add('price-sale'); 
                } else {
                    priceNewElement.style.display = 'none';
                }
            }
        }
    }
};
