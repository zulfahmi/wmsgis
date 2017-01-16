
//var map = L.map('map').setView([51.505, -0.09], 13);



//var search = new L.Storage.SearchControl().addTo(map);
//var importact = new L.Storage.ImportAction({}).addTo(map);
//var editact = new L.Storage.EditPropertiesAction(map);
//var polyact = new L.Storage.DrawPolylineAction(map);

var MAP = new L.Storage.Map('map', {
    'properties': {
        'licences': {
            'Nenustatyta licenzija': {
                'name': 'Nenustatyta licenzija',
                'url': ''
            },

        },
        'storage_id': null,
        'locale': 'en',
        'allowEdit': true,
        'tilelayers': [
            {
                'rank': 1,
                'url_template': '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                'attribution': '\u00a9 OSM Contributors',
                'minZoom': 0,
                'id': 1,
                'selected': true,
                'name': 'OpenStreetMap',
                'maxZoom': 18
            }
            
        ],
        'urls': {
            
        },
        'zoom': 6,
        'default_iconUrl': '/static/storage/src/img/marker.png',
        'datalayers': []
    },
    'geometry': {
        'type': 'Point',
        'coordinates': [
            2,
            51
        ]
    }
});

MAP.ui.on('panel:ready', function () {
    L.S.AutoComplete.multiSelect('id_editors', {
        placeholder: 'Type editors nick to add…'
    });
    L.S.AutoComplete.select('id_owner', {
        placeholder: 'Type new owner nick…'
    });
});