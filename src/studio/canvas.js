import { fabric } from "fabric";

(function () {
  fabric.CustomCanvas = fabric.util.createClass(fabric.Canvas, {
    initialize: function (el, options) {
      this.callSuper("initialize", el, options);
    },
    /**
     * @private
     * @param {Boolean} alreadySelected true if target is already selected
     * @param {String} corner a string representing the corner ml, mr, tl ...
     */
    _getActionFromCorner(alreadySelected, corner) {
      if (!corner || !alreadySelected) {
        return "drag";
      }

      switch (corner) {
        case "tl":
        case "br":
          return "rotate";
        case "tr":
        case "bl":
          return "scale";
        default:
          return "drag";
      }
    },
    /**
     * @private
     */
    getCornerCursor: function (corner, target, e) {
      switch (corner) {
        case "tl":
        case "br":
          return this.rotationCursor;
        case "tr":
        case "bl":
          return this._getRotatedCornerCursor(corner, target, e);
        default:
          return this.defaultCursor;
      }
    },
  });
})();

const createFabricCanvas = () => {
  return new fabric.CustomCanvas("canvas");
};

export default createFabricCanvas;
