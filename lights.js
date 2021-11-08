let trafficLights = prompt('Enter the color of the traffic light');
function updateLight(trafficLights) {
    switch (trafficLights) {
        case 'red':
            return 'yellow';
            
        case 'yellow':
            return 'green';
            
        case 'green':
             return 'yellow';
        default:
              return ''      
    }
}

updateLight(trafficLights);
// console.log(updateLight(trafficLights))

const updatedColor = updateLight(trafficLights);
const message = updatedColor ? 'Now: ' + updatedColor : 'This is a traffic light ... there are only three colors !!!  ';
alert(message);