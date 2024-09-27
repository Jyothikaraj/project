const from = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI ();

    const url = document.getElementById('url').ariaValueMax;
    const size = document.getElementById('size').ariaValueMax;

//if(url=='') {
   // alert('Please enter a URL')
//} 
};

setTimeout (() => {
    const saveUrl = qr.querySelector('img').src;
    createSaveBtn(saveUrl);
})
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url, 
        width: size,
        height: size,
    } );
}

const clearUI = () => {
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link');
    if (saveLink) saveLink.remove();

}

const createSaveBtn = (saveUrl) => {
const link = document.createElement ('a');
link.id = 'save-link';
link.classList = 'bg-red-500 hover:bg-red-700 text-white font-boldpy-2 rounded w-1/3 m-auto my-5';
link.href = saveUrl;
link.download = 'qrcode';
link.innerHTML = 'Save Image';
document.getElementById ('generated').appendChild(link);
};

from.addEventListener('submit', onGenerateSubmit);