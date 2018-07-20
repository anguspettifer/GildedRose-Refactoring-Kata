(function(exports){
  function Sulfuras(sellIn, quality){
    this.update = new Update(sellIn, quality)
  };

  Sulfuras.prototype.updateSellIn = function () {
    // nothing happens
  };

  Sulfuras.prototype.sellIn = function () {
    return this.sellIn
  };

  Sulfuras.prototype.updateQuality = function () {
    // nothing happens
  };

  Sulfuras.prototype.quality = function () {
    return this.quality
  };

  exports.Sulfuras = Sulfuras;
})(this);
