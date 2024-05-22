function comprarHotmart(checkoutMode) {
    // Redirigir a la página de checkout de Hotmart con el checkoutMode específico
    window.location.href = `https://pay.hotmart.com/${checkoutMode}?checkoutMode=2`;
}


function comprarPayPal() {
    // Redirigir a la página de checkout de PayPal
    window.location.href = 'https://paypal.me/invierteatuconocimie?country.x=UY&locale.x=es_XC';
    // Reemplaza 'https://www.paypal.com' con la URL de tu página de PayPal de compra
}


function smswhasapp() {
    // Redirigir a la página de web whatsapp
    window.location.href = 'https://wa.link/mtnz2d';
    // Reemplaza 'https://www.whatsapp.com' para que te escriban al whatsapp
}

