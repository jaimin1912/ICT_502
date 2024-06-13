function calculateCost() {
    const yardSize = document.getElementById('yardSize').value;
    const designType = document.getElementById('designType').value;
    let basePrice = 0.25; // Price per square foot

    if (designType === 'premium') {
        basePrice = 0.40;
    }

    const cost = yardSize * basePrice;
    document.getElementById('estimatedCost').innerText = `Estimated Cost: $${cost.toFixed(2)}`;
}