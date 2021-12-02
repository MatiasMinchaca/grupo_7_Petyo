window.addEventListener('load', () => {
    let searchHeaderMobile = document.getElementById("form-search-mobile");
    let searchHeaderMobileInput = document.getElementById("search-bar");
    let searchHeaderDesktop = document.getElementById("form-search-desktop");
    let searchHeaderDesktopInput = document.getElementById("input-search-header");

    searchHeaderMobile.addEventListener('submit', (e) => {
        let error = false;
        e.preventDefault()
        if(searchHeaderMobileInput.value != ""){
            searchHeaderMobile.submit()
        }

    })
    searchHeaderDesktop.addEventListener('submit', (e) => {
        let error = false;
        e.preventDefault()
        if(searchHeaderDesktopInput.value != ""){
            searchHeaderDesktop.submit()
        }

    })


})