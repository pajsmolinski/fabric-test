import { fabric } from 'fabric';

(function() {
  fabric.CustomObject = fabric.util.createClass(fabric.Rect, {
    initialize: function(options) {

      options = {
        ...options,
        width: 200,
        height: 200,
        fill: 'yellow',
        padding: 10,
        borderColor: 'black',
        cornerStrokeColor: 'black',
        hasRotatingPoint: false,
        lockUniScaling: true,
        transparentCorners: false,
        cornerSize: 20
      };

      this.callSuper('initialize', options);
    },
    /**
     * @param {string} control
     * @param {CanvasRenderingContext2D} ctx
     * @param {string} methodName
     * @param {number} left
     * @param {number} top
     * @private
     */
    _drawControl: function(control, ctx, methodName, left, top) {
      if (!this.isControlVisible(control)) {
        return;
      }
      const size = this.cornerSize, stroke = !this.transparentCorners && this.cornerStrokeColor;


      switch ( control ) {
        case 'tl':
          ctx.beginPath();
          ctx.arc(left, top, size / 2, 0, 2 * Math.PI, false);
          ctx[methodName]();
          if (stroke) {
            ctx.stroke();
          }
          break;
        case 'br':
          ctx.beginPath();
          ctx.arc(left + size, top + size, size / 2, 0, 2 * Math.PI, false);
          ctx[methodName]();
          if (stroke) {
            ctx.stroke();
          }
          break;
        case 'tr':
          ctx.beginPath();
          ctx.moveTo(left, top);
          ctx.lineTo(left + size, top + size);
          ctx.lineTo(left + size * 2, top - size);
          ctx.lineTo(left, top);
          ctx[methodName]();
          if (stroke) {
            ctx.stroke();
          }
          break;
        case 'bl':
          left = left + size;
          top = top + size;

          ctx.beginPath();
          ctx.moveTo(left, top);
          ctx.lineTo(left - size, top - size);
          ctx.lineTo(left - size * 2, top + size);
          ctx.lineTo(left, top);
          ctx[methodName]();
          if (stroke) {
            ctx.stroke();
          }
          break;
        default:
          this.transparentCorners || ctx.clearRect(left, top, size, size);
          ctx[methodName + 'Rect'](left, top, size, size);
          if (stroke) {
            ctx.strokeRect(left, top, size, size);
          }
      }
    },
  });

})();


const createFabricObject = () => {
  return new fabric.CustomObject();
};

export default createFabricObject;
