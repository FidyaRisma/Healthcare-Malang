var size = 0;
var placement = 'point';
function categories_Healthcare_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Clinic':
                    return [
                        new ol.style.Style({
                            image: new ol.style.Circle({
                                radius: 15, 
                                fill: new ol.style.Fill({ color: 'rgba(255, 255, 255, 0)' }) 
                            }),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        }),
                        new ol.style.Style({
                            image: new ol.style.Icon({
                                scale: 1.2 + size, 
                                src: '/Healthcare-Malang/styles/legend/Healthcare_4_0.png'  // 
                            }),
                            text: createTextStyle(feature, resolution, labelText, labelFont,
                                                  labelFill, placement, bufferColor,
                                                  bufferWidth)
                        })
                    ];
                    break;
                    case 'Hospital':
                        return [
                            new ol.style.Style({
                                image: new ol.style.Circle({
                                    radius: 15, 
                                    fill: new ol.style.Fill({ color: 'rgba(255, 255, 255, 0)' }) 
                                }),
                                text: createTextStyle(feature, resolution, labelText, labelFont,
                                                      labelFill, placement, bufferColor,
                                                      bufferWidth)
                            }),
                            new ol.style.Style({
                                image: new ol.style.Icon({
                                    scale: 1.5 + size, 
                                    src: '/Healthcare-Malang/styles/legend/Healthcare_4_1.png'  
                                }),
                                text: createTextStyle(feature, resolution, labelText, labelFont,
                                                      labelFill, placement, bufferColor,
                                                      bufferWidth)
                            })
                        ];
                    
                        break;
                }
            }

var style_Healthcare_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("healthcare");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Healthcare_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
