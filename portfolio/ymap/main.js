ymaps.ready(init);

var placemarks = [
{
    latitude: 55.0682078818863,
    longitude: 82.9126982698364,
    hintContent: '<div class="map__hint">ул. Красный проспект, д.220 корпус 10</div>',
    balloonContent: [
    '<div class="map__balloon">',
    '<img class="map__burger-img" src="img/2.png" alt="Стоматологическая клиника Перламутр"/>',
    'Стоматология «Perlamutr»- уютная клиника для приема своих любимых пациентов.',
    '</div>'
    ],
},
    // {
    //     latitude: 59.94,
    //     longitude: 30.25,
    //     hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
    //     balloonContent: [
    //         '<div class="map__balloon">',
    //         '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
    //         'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
    //         '</div>'
    //     ]
    // },
    // {
    //     latitude: 59.93,
    //     longitude: 30.34,
    //     hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
    //     balloonContent: [
    //         '<div class="map__balloon">',
    //         '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
    //         'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
    //         '</div>'
    //     ]
    // }
    ],
    geoObjects= [];

    function init() {
        var map = new ymaps.Map('map', {
            center: [55.06824482336358,82.91265535449217],
            zoom: 17,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });

        for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/3.png',
                // iconImageSize: [46, 57],
                iconImageSize: [92, 114],
                iconImageOffset: [-43, -87],
                // iconImageClipRect: [[415, 0], [461, 57]]
            });
        }

        var clusterer = new ymaps.Clusterer({
            clusterIcons: [
            {
                href: 'img/2.png',
                size: [100, 100],
                offset: [-50, -50]
            }
            ],
            clusterIconContentLayout: null
        });

        map.geoObjects.add(clusterer);
        clusterer.add(geoObjects);
    }