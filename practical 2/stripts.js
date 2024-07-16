function checkEligibility() {
    // Retrieve the values from the input fields
    const age = document.getElementById('age').value;
    const isMember = document.getElementById('member').checked;
    let result = '';

    // Check eligibility criteria
    if (age >= 65) {
        result = 'You are eligible for a Senior Discount.';
    } else if (age >= 18 && isMember) {
        result = 'You are eligible for a Member Discount.';
    } else {
        result = 'You are not eligible for any discount.';
    }

    // Display the result
    document.getElementById('result').innerText = result;
}
