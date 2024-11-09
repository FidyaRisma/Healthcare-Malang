ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([112.471049, -8.064393, 112.810006, -7.870875]);
var wms_layers = [];


        var lyr_Gmaps_0 = new ol.layer.Tile({
            'title': 'Gmaps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var lyr_Heatmap_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Heatmap",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Heatmap_1.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [112.569949, -8.049485, 112.693737, -7.910965]
                            })
                        });
var format_RoadClass_2 = new ol.format.GeoJSON();
var features_RoadClass_2 = format_RoadClass_2.readFeatures(json_RoadClass_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RoadClass_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadClass_2.addFeatures(features_RoadClass_2);
var lyr_RoadClass_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadClass_2, 
                style: style_RoadClass_2,
                popuplayertitle: "Road Class",
                interactive: false,
    title: 'Road Class<br />\
    <img src="styles/legend/RoadClass_2_0.png" /> Primary<br />\
    <img src="styles/legend/RoadClass_2_1.png" /> residential<br />\
    <img src="styles/legend/RoadClass_2_2.png" /> Secondary<br />\
    <img src="styles/legend/RoadClass_2_3.png" /> Tertiary<br />\
    <img src="styles/legend/RoadClass_2_4.png" /> Trunk<br />'
        });
var format_SubdistrictBoundary_3 = new ol.format.GeoJSON();
var features_SubdistrictBoundary_3 = format_SubdistrictBoundary_3.readFeatures(json_SubdistrictBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SubdistrictBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubdistrictBoundary_3.addFeatures(features_SubdistrictBoundary_3);
var lyr_SubdistrictBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubdistrictBoundary_3, 
                style: style_SubdistrictBoundary_3,
                popuplayertitle: "Subdistrict Boundary",
                interactive: false,
    title: 'Subdistrict Boundary<br />\
    <img src="styles/legend/SubdistrictBoundary_3_0.png" /> BLIMBING<br />\
    <img src="styles/legend/SubdistrictBoundary_3_1.png" /> KEDUNGKANDANG<br />\
    <img src="styles/legend/SubdistrictBoundary_3_2.png" /> KLOJEN<br />\
    <img src="styles/legend/SubdistrictBoundary_3_3.png" /> LOWOKWARU<br />\
    <img src="styles/legend/SubdistrictBoundary_3_4.png" /> SUKUN<br />'
        });
var format_Healthcare_4 = new ol.format.GeoJSON();
var features_Healthcare_4 = format_Healthcare_4.readFeatures(json_Healthcare_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Healthcare_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Healthcare_4.addFeatures(features_Healthcare_4);
var lyr_Healthcare_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Healthcare_4, 
                style: style_Healthcare_4,
                popuplayertitle: "Healthcare",
                interactive: false,
    title: 'Healthcare<br />\
    <img src="styles/legend/Healthcare_4_0.png" /> Clinic<br />\
    <img src="styles/legend/Healthcare_4_1.png" /> Hospital<br />'
        });

lyr_Gmaps_0.setVisible(true);lyr_Heatmap_1.setVisible(true);lyr_RoadClass_2.setVisible(true);lyr_SubdistrictBoundary_3.setVisible(true);lyr_Healthcare_4.setVisible(true);
var layersList = [lyr_Gmaps_0,lyr_Heatmap_1,lyr_RoadClass_2,lyr_SubdistrictBoundary_3,lyr_Healthcare_4];
lyr_RoadClass_2.set('fieldAliases', {'highway': 'Class', });
lyr_SubdistrictBoundary_3.set('fieldAliases', {'WADMKC': 'Subdistrict', 'ID': 'ID', });
lyr_Healthcare_4.set('fieldAliases', {'healthcare': 'Type', 'source': 'Category', 'name': 'Name', 'WADMKC': 'Subdistrict', 'id': 'id', });
lyr_RoadClass_2.set('fieldImages', {'highway': 'TextEdit', });
lyr_SubdistrictBoundary_3.set('fieldImages', {'WADMKC': 'TextEdit', 'ID': '', });
lyr_Healthcare_4.set('fieldImages', {'healthcare': 'TextEdit', 'source': 'TextEdit', 'name': 'TextEdit', 'WADMKC': 'TextEdit', 'id': 'Hidden', });
lyr_RoadClass_2.set('fieldLabels', {'highway': 'no label', });
lyr_SubdistrictBoundary_3.set('fieldLabels', {'WADMKC': 'no label', 'ID': 'inline label - visible with data', });
lyr_Healthcare_4.set('fieldLabels', {'healthcare': 'header label - always visible', 'source': 'header label - visible with data', 'name': 'header label - visible with data', 'WADMKC': 'hidden field', });
lyr_Healthcare_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});