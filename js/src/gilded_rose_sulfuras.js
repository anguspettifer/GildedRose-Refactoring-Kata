(function(exports){
  function Sulfuras(sellIn, quality){
    this.update = new Update(sellIn, quality)
  };

  Sulfuras.prototype.updateSellIn = function () {
    // nothing happens
  };

  Sulfuras.prototype.updateQuality = function () {
    // nothing happens
  };

  exports.Sulfuras = Sulfuras;
})(this);
