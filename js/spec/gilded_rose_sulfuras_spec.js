describe("Sulfuras", function() {

  it("The sellin should not change", function() {
    const sulfuras = new Sulfuras(5,10);
    sulfuras.updateSellIn();
    expect(sulfuras.sellIn()).toEqual(5);
  });

  it("The quality should not change", function() {
    const sulfuras = new Sulfuras(5,10);
    sulfuras.updateQuality();
    expect(sulfuras.quality).toEqual(10);
  });

});
