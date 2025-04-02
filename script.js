document.addEventListener("DOMContentLoaded", () => {
    // Gestione visualizzazione MRR
    const alertIcon = document.getElementById("alert-icon");
    const commissionsBox = document.getElementById("sales-commissions-box");

    alertIcon.addEventListener("click", () => {
        commissionsBox.style.display = commissionsBox.style.display === "none" ? "block" : "none";
    });

    // Calcolo prezzi
    document.getElementById("calculate-btn").addEventListener("click", function () {
        const rooms = parseInt(document.getElementById("rooms").value) || 0;
        const doctors = parseInt(document.getElementById("doctors").value) || 0;
        const cpl = parseInt(document.getElementById("cpl").value) || 0;
        const additionalLocations = parseInt(document.getElementById("additional-locations").value) || 0;

        const pricingTable = [
            { rooms: 1, setup: 99, price: 270 },
            { rooms: 2, setup: 129, price: 180 },
            { rooms: 3, setup: 129, price: 160 },
            { rooms: 4, setup: 159, price: 130 },
            { rooms: 5, setup: 159, price: 110 },
            { rooms: 6, setup: 199, price: 100 },
            { rooms: 7, setup: 199, price: 100 },
            { rooms: 8, setup: 199, price: 100 },
            { rooms: 9, setup: 299, price: 95 },
            { rooms: 10, setup: 499, price: 90 }
        ];

        let setupFee = 499;
        let monthlyPricePerRoom = 90;

        if (rooms >= 1 && rooms <= 10) {
            const pricing = pricingTable.find(p => p.rooms === rooms);
            if (pricing) {
                setupFee = pricing.setup;
                monthlyPricePerRoom = pricing.price;
            }
        }

        const monthlyPrice = monthlyPricePerRoom * rooms;

        document.getElementById("monthly-price").textContent = `${monthlyPrice.toFixed(2)} €`;
        document.getElementById("setup-fee").textContent = `${setupFee.toFixed(2)} €`;
        document.getElementById("sales-commissions").textContent = `${monthlyPrice.toFixed(2)} €`;
    });
});
