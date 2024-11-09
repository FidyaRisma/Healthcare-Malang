function createPlusIcon(color) {
    // Create a canvas element
    var canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    var ctx = canvas.getContext('2d');

    // Set color and line width for the plus sign
    ctx.fillStyle = color;
    ctx.lineWidth = 4;

    // Draw the vertical part of the plus sign
    ctx.fillRect(14, 2, 4, 28);  // Adjust x, y, width, and height as needed

    // Draw the horizontal part of the plus sign
    ctx.fillRect(2, 14, 28, 4);  // Adjust x, y, width, and height as needed

    // Return the canvas as a data URL for ol.style.Icon
    return canvas.toDataURL();
}

function categories_Healthcare_4(feature, value, size, resolution, labelText,
                                 labelFont, labelFill, bufferColor, bufferWidth,
                                 placement) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    var iconColor;
    switch(valueStr) {
        case 'Clinic':
            iconColor = 'rgba(0, 0, 255, 1.0)';  // Blue color for Clinic
            break;
        case 'Hospital':
            iconColor = 'rgba(227, 26, 28, 1.0)';  // Red color for Hospital
            break;
        default:
            iconColor = 'rgba(0, 0, 0, 1.0)';  // Default color if needed
    }
    
    return [new ol.style.Style({
        image: new ol.style.Icon({
            src: createPlusIcon(iconColor),
            scale: 0.7  // Adjust scale as needed
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];
}

var style_Healthcare_4 = function(feature, resolution) {
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

    var style = categories_Healthcare_4(feature, value, size, resolution, labelText,
                                        labelFont, labelFill, bufferColor,
                                        bufferWidth, placement);

    return style;
};
