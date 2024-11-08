window.onload = function() {
    var nf = new Intl.NumberFormat();
    var PriceList = {
        sp1: 180000,
        sp2: 180000,
        sp3: 180000,
        sp4: 700000,
        sp5: 620000,
        sp6: 650000,
        sp7: 500000,
        sp8: 420000,
        sp9: 420000,
        sp10: 550000,
        sp11: 700000,
        sp12: 800000,
        sp13: 800000,
        sp14: 800000,
        sp15: 380000,
        sp16: 380000
    };

    var discountedPrices = {
        sp1: 150000,
        sp4: 650000,
        sp7: 450000,
        sp9: 350000,
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
                    priceNewElement.classList.add('price-sale'); // Apply sale style
                } else {
                    priceNewElement.style.display = 'none';
                }
            }
        }
    }
};
