import { fabric } from 'fabric';

(function() {
    fabric.CustomObject = fabric.util.createClass(fabric.Rect, {
        initialize: function(options) {
            
            options = {
                ...options,
                width: 200,
                height: 200,
                fill: 'yellow'
            }

            
            this.callSuper('initialize', options);
        }
    })
})()


const createFabricObject = () => {
    return new fabric.CustomObject();
}

export default createFabricObject;