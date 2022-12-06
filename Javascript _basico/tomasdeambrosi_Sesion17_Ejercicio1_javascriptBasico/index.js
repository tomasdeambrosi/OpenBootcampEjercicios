function initMap() {
    const posicion = {
        lat : 0.4194989,
        lng: 2.1049769
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: posicion
    })

    const lugar1 = {lat: 37.982787350237366, lng: 23.727478833640813}
    const lugar2 = {lat: -13.16290088560773, lng: -72.54454449787632}
    const lugar3 = {lat: -37.80957757673679, lng: -70.92451071601883}

    const marker = new google.maps.Marker({
        position: lugar1,
        map,
        title: "Lugar favorito 1"
    })

    const marker2 = new google.maps.Marker({
        position: lugar2,
        map,
        title: "Lugar favorito 2"
    })

    const marker3 = new google.maps.Marker({
        position: lugar3,
        map,
        title: "Lugar favorito 3"
    })
}

