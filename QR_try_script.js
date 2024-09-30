const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

// Function to handle the form submission
const onGenerateSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting the traditional way
    clearUI(); // Clear the previous QR code if any

    const url = document.getElementById('url').value; // Get URL input
    const size = document.getElementById('size').value; // Get size from the dropdown

    if (!url) {
        alert('Please enter a URL');
        return;
    }

    generateQRCode(url, size); // Call the QR code generation function

    setTimeout(() => {
        const saveUrl = qr.querySelector('img').src; // Get the generated QR code image
        createSaveBtn(saveUrl); // Create a button to save the QR code
    }, 50);
};

// Function to generate the QR code
const generateQRCode = (url, size) => {
    const qrcode = new QRCode("qrcode", {
        text: url, 
        width: size,
        height: size,
    });
};

// Function to clear the UI before generating a new QR code
const clearUI = () => {
    qr.innerHTML = ''; // Clear previous QR code
    const saveLink = document.getElementById('save-link');
    if (saveLink) saveLink.remove(); // Remove the save button if it exists
};

// Function to create a save button to download the QR code image
const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl; // Set the download URL
    link.download = 'qrcode'; // Set the default file name
    link.innerHTML = 'Save Image'; // Button text
    document.getElementById('generated').appendChild(link); // Add the button to the DOM
};

// Add event listener to handle form submission
form.addEventListener('submit', onGenerateSubmit);