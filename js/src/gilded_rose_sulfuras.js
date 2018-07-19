(function(exports){
  function Sulfuras(sellin, quality){
    this.sellin = sellin
    this.quality = quality
  };

  Sulfuras.prototype.updateSellIn = function () {
    // nothing happens
  };

  Sulfuras.prototype.sellIn = function () {
    return this.sellin
  };

  Sulfuras.prototype.updateQuality = function () {
    // nothing happens
  };

  Sulfuras.prototype.quality = function () {
    return this.quality
  };

  exports.Sulfuras = Sulfuras;
})(this);
