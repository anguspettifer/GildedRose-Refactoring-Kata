describe("Gilded Rose", function() {

  describe('Aged Brie', function(){
    it("The name should not change", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Aged Brie");
    });

    it("The sellin should reduce by one", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
    });

    describe('quality', function(){
      it("Should increase by 1 in sell by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 1, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
      });

      it("Should increase by 1 after sell by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(12);
      });

      it("Should not rise above 50", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 1, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
      });
    });


  });



});
