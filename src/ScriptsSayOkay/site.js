
let uuid = crypto.randomUUID();
console.log(uuid); // for example "ab6b7b51-1c1b-4346-bc7b-d1555187ac90"
//read: https://www.tomfaltesek.com/azure-function-contact-form-http-trigger/

var contactForm = document.getElementById("foofoo");
var successMessage = document.getElementById("id01");

contactForm.onsubmit = function (event) {
    event.preventDefault(); // Don't let the browser submit the form.

// Build JSON key-value pairs using the form fields.
var payload = { };
payload["name"] = "hello dave";
    //contactForm.querySelectorAll("input, textarea").forEach(field => {
    //    payload[field.name] = field.value;
    //});

    makeRequest(payload);
}

// https://functionappcheckin20221223073501.azurewebsites.net/
// http://localhost:7197/api/FunctionApp1CheckIn
//
async function makeRequest(payload) {
    try {
        const response = await fetch("https://functionappcheckin20221223073501.azurewebsites.net/",
        {
            method: 'post',
            mode: "no-cors",
            body: JSON.stringify(payload)
        });

        console.log('response.status: ', response.status); // ??? 200
        console.log(response);

    } catch (err) { console.log(err); }
}