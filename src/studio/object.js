import {fabric} from "fabric";

(function () {
  fabric.CustomObject = fabric.util.createClass(fabric.Rect, {
    initialize: function (options) {
      options = {
        ...options
      };

      this.callSuper("initialize", options);
    },
    /**
     * @param {string} control
     * @param {CanvasRenderingContext2D} ctx
     * @param {string} methodName
     * @param {number} left
     * @param {number} top
     * @private
     */
    _drawControl: function (control, ctx, methodName, left, top) {
      if (!this.isControlVisible(control)) {
        return;
      }
      const size = this.cornerSize / 2,
          stroke = !this.transparentCorners && this.cornerStrokeColor;

      ctx.beginPath()

      left += size / 2;
      top += size / 2;

      switch (control) {
        case "tl":
          ctx.arc(left, top, size / 2, 0, 2 * Math.PI, false);
          ctx[methodName]();
          if (stroke) {
            ctx.stroke();
          }
          break;
        case "br":
          ctx.arc(left + size, top + size, size / 2, 0, 2 * Math.PI, false);
          ctx[methodName]();
          if (stroke) {
            ctx.stroke();
          }
          break;
        case "tr":
          ctx.moveTo(left, top);
          ctx.lineTo(left + size, top + size);
          ctx.lineTo(left + size * 2, top - size);
          ctx.lineTo(left, top);
          ctx[methodName]();
          if (stroke) {
            ctx.stroke();
          }
          break;
        case "bl":
          left = left + size;
          top = top + size;
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
          ctx[methodName + "Rect"](left, top, size, size);
          if (stroke) {
            ctx.strokeRect(left, top, size, size);
          }
      }
    },
  });
})();

const customObjectDefaultOptions = {
  width: 200,
  height: 200,
  fill: "yellow",
  padding: 10,
  borderColor: "black",
  cornerStrokeColor: "black",
  hasRotatingPoint: false,
  lockUniScaling: true,
  transparentCorners: false,
  cornerSize: 40,
}

const createFabricObject = () => {
  return new fabric.CustomObject(customObjectDefaultOptions);
};

export default createFabricObject;
