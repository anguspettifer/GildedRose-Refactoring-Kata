(function(exports){
  // const unit_reduction = -1.. how do I get this to work?

  function Foo(sellIn, quality){
    this.sellIn = sellIn
    this.quality = quality
  };

  Foo.prototype.updateSellIn = function () {
    this.sellIn -= 1
  };

  Foo.prototype.updateQuality = function () {
    if (this.sellIn > 0) {
      this.quality = Update.changeQuality(-1, this.quality)
    } else {
      this.quality = Update.changeQuality(-2, this.quality)
    }
  };

  exports.Foo = Foo;
})(this);
