
window.loadServiceWorkerTest = () => {
    //window.addEventListener('load', () => {
        if (('serviceWorker' in navigator) && navigator && navigator.serviceWorker) {
            navigator.serviceWorker.register('service-worker-test.js').then(
                () => {
                    console.log("Service Worker registered!");
                },
                err => {
                    console.error('Service Worker registration failed! 😱', err);
                }
            )
        }
    //});
};
