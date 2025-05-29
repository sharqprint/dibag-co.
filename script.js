// Copy phone number to clipboard when clicked
document.getElementById("phone").addEventListener("click", function () {
    const phoneNumber = "963944700703";
    navigator.clipboard.writeText(phoneNumber).then(function () {
        alert("تم نسخ الرقم بنجاح: " + phoneNumber);
    }, function (err) {
        console.error("فشل في نسخ الرقم: ", err);
    });
});