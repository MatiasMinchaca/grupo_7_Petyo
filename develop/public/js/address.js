window.addEventListener('load', () =>{
    let provinces = document.getElementById('provinceSelect');
    let citys = document.getElementById('citySelect');
    let imageLoading = document.getElementById('loading-background');
    (function provincesApi(){
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(response => {
            return response.json();
        })
        .then(result => {
            result.provincias.sort(function(prev,next){
                return prev.nombre > next.nombre
            })
            let options = '';
            result.provincias.forEach(provincia => {
                options += `<option value = "${provincia.nombre}">${provincia.nombre}</option>`
            })
            provinces.innerHTML += options;
        })
    })()
    function citysApis() {
        let province = provinces.value;
        imageLoading.classList.remove('hidden');
            fetch(`https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia=${province}`)
            .then(response =>{
                return response.json();
            })
            .then(result => {
                result.localidades.sort(function(prev,next){
                    return prev.nombre > next.nombre
                })
                if(citys.value != 0) {
                    citys.innerHTML = `<option selected hidden value="${citys.value}" >${citys.value}</option>`
                } else {
                    citys.innerHTML = `<option selected hidden value="0">Ciudad</option>`
                }
                let options = ''
                result.localidades.forEach(city => {
                    options += `<option value = "${city.nombre.toLowerCase()}">${city.nombre.toLowerCase()}</option>`
                })
                citys.innerHTML += options;
                
                imageLoading.classList.add('hidden');
            })
            .catch(err => {
                console.log(err)
            })
    }
    if(provinces.value != 0){
        citysApis()
    }
    provinces.addEventListener('change', () =>{
        citysApis()
    })
})