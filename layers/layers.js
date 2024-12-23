var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sector4_1 = new ol.format.GeoJSON();
var features_Sector4_1 = format_Sector4_1.readFeatures(json_Sector4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector4_1.addFeatures(features_Sector4_1);
var lyr_Sector4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector4_1, 
                style: style_Sector4_1,
                popuplayertitle: "Sector 4",
                interactive: true,
                title: '<img src="styles/legend/Sector4_1.png" /> Sector 4'
            });
var format_Sector3_2 = new ol.format.GeoJSON();
var features_Sector3_2 = format_Sector3_2.readFeatures(json_Sector3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector3_2.addFeatures(features_Sector3_2);
var lyr_Sector3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector3_2, 
                style: style_Sector3_2,
                popuplayertitle: "Sector 3",
                interactive: true,
                title: '<img src="styles/legend/Sector3_2.png" /> Sector 3'
            });
var format_Sector2_3 = new ol.format.GeoJSON();
var features_Sector2_3 = format_Sector2_3.readFeatures(json_Sector2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector2_3.addFeatures(features_Sector2_3);
var lyr_Sector2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector2_3, 
                style: style_Sector2_3,
                popuplayertitle: "Sector 2",
                interactive: true,
                title: '<img src="styles/legend/Sector2_3.png" /> Sector 2'
            });
var format_Sector1_4 = new ol.format.GeoJSON();
var features_Sector1_4 = format_Sector1_4.readFeatures(json_Sector1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector1_4.addFeatures(features_Sector1_4);
var lyr_Sector1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector1_4, 
                style: style_Sector1_4,
                popuplayertitle: "Sector 1",
                interactive: true,
                title: '<img src="styles/legend/Sector1_4.png" /> Sector 1'
            });
var format_Accesobarredora_5 = new ol.format.GeoJSON();
var features_Accesobarredora_5 = format_Accesobarredora_5.readFeatures(json_Accesobarredora_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesobarredora_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesobarredora_5.addFeatures(features_Accesobarredora_5);
var lyr_Accesobarredora_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesobarredora_5, 
                style: style_Accesobarredora_5,
                popuplayertitle: "Acceso barredora",
                interactive: true,
                title: '<img src="styles/legend/Accesobarredora_5.png" /> Acceso barredora'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Sector4_1.setVisible(true);lyr_Sector3_2.setVisible(true);lyr_Sector2_3.setVisible(true);lyr_Sector1_4.setVisible(true);lyr_Accesobarredora_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Sector4_1,lyr_Sector3_2,lyr_Sector2_3,lyr_Sector1_4,lyr_Accesobarredora_5];
lyr_Sector4_1.set('fieldAliases', {'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_Sector3_2.set('fieldAliases', {'Nombre': 'Nombre', 'longitud': 'longitud', });
lyr_Sector2_3.set('fieldAliases', {'Nome': 'Nome', 'Lonxitude': 'Lonxitude', });
lyr_Sector1_4.set('fieldAliases', {'Nombre': 'Nombre', 'Longitud': 'Longitud', 'Identifica': 'Identifica', });
lyr_Accesobarredora_5.set('fieldAliases', {'Nome': 'Nome', 'Lonxitude': 'Lonxitude', });
lyr_Sector4_1.set('fieldImages', {'Nombre': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Sector3_2.set('fieldImages', {'Nombre': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Sector2_3.set('fieldImages', {'Nome': '', 'Lonxitude': '', });
lyr_Sector1_4.set('fieldImages', {'Nombre': 'TextEdit', 'Longitud': 'TextEdit', 'Identifica': 'TextEdit', });
lyr_Accesobarredora_5.set('fieldImages', {'Nome': 'TextEdit', 'Lonxitude': 'TextEdit', });
lyr_Sector4_1.set('fieldLabels', {'Nombre': 'inline label - always visible', 'Longitud': 'inline label - always visible', });
lyr_Sector3_2.set('fieldLabels', {'Nombre': 'inline label - always visible', 'longitud': 'inline label - always visible', });
lyr_Sector2_3.set('fieldLabels', {'Nome': 'inline label - always visible', 'Lonxitude': 'inline label - always visible', });
lyr_Sector1_4.set('fieldLabels', {'Nombre': 'inline label - always visible', 'Longitud': 'inline label - always visible', 'Identifica': 'hidden field', });
lyr_Accesobarredora_5.set('fieldLabels', {'Nome': 'inline label - always visible', 'Lonxitude': 'inline label - always visible', });
lyr_Accesobarredora_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});