describe("Sulfuras", function() {

  it("The sellin should not change", function() {
    const sulfuras = new Sulfuras(5,80);
    sulfuras.updateSellIn();
    expect(sulfuras.update.sellIn).toEqual(5);
  });

  it("The quality should not change", function() {
    const sulfuras = new Sulfuras(5,80);
    sulfuras.updateQuality();
    expect(sulfuras.update.quality).toEqual(80);
  });

});
