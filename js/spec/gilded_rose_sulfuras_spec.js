describe("Gilded Rose", function() {

  describe('sulfuras', function(){
    it("The name should not change", function() {
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros');
    });

    it("The sellin should not change", function() {
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    });

    it("The quality should not change", function() {
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 1, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(10);
    });

  });

});
