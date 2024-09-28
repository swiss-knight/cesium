import Check from "../../../../Core/Check.js";

/**
 * PPE (Per-Point Error) texture in `NGA_gpm_local`.
 *
 * This reflects the `ppeTexture` definition of the
 * {@link https://nsgreg.nga.mil/csmwg.jsp|NGA_gpm_local} glTF extension.
 *
 * This is a valid glTF `TextureInfo` object (with a required `index`
 * and an optional `texCoord)`, with additional properties that
 * describe the structure of the metdata that is stored in the texture.
 *
 * @experimental This feature is not final and is subject to change without Cesium's standard deprecation policy.
 */
function PpeTexture(options) {
  //>>includeStart('debug', pragmas.debug);
  Check.typeOf.object("options.traits", options.traits);
  Check.typeOf.number.greaterThanOrEquals("options.index", options.index, 0);
  //>>includeEnd('debug');

  this._traits = options.traits;
  this._noData = options.noData;
  this._offset = options.offset;
  this._scale = options.scale;
  this._index = options.index;
  this._texCoord = options.texCoord;
}

Object.defineProperties(PpeTexture.prototype, {
  /**
   * The data contained here applies to this node and corresponding
   * texture.
   *
   * @memberof PpeTexture.prototype
   * @type {PpeMetadata}
   * @readonly
   */
  traits: {
    get: function () {
      return this._traits;
    },
  },

  /**
   * A value to represent missing data - also known as a sentinel value -
   * wherever it appears.
   *
   * @memberof PpeTexture.prototype
   * @type {number|undefined}
   * @readonly
   */
  noData: {
    get: function () {
      return this._noData;
    },
  },

  /**
   * An offset to apply to property values.
   *
   * @memberof PpeTexture.prototype
   * @type {number|undefined}
   * @readonly
   */
  offset: {
    get: function () {
      return this._offset;
    },
  },

  /**
   * An scale to apply to property values.
   *
   * @memberof PpeTexture.prototype
   * @type {number|undefined}
   * @readonly
   */
  scale: {
    get: function () {
      return this._scale;
    },
  },

  /**
   * The index of the texture
   *
   * @memberof PpeTexture.prototype
   * @type {number}
   * @readonly
   */
  index: {
    get: function () {
      return this._index;
    },
  },

  /**
   * The set index of texture's TEXCOORD attribute used for texture coordinate mapping.
   *
   * @memberof PpeTexture.prototype
   * @type {number|undefined}
   * @readonly
   */
  texCoord: {
    get: function () {
      return this._texCoord;
    },
  },
});

export default PpeTexture;
