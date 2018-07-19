describe("Gilded Rose", function() {

  describe('foo', function(){
    it("The name should not change", function() {
      const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("foo");
    });

    it("The sellin should reduce by one", function() {
      const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
    });

    describe('quality', function(){
      it("Should reduce by 1 in sell by date", function() {
        const gildedRose = new Shop([ new Item("foo", 1, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(9);
      });

      it("Should reduce by 2 after sell by date", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(8);
      });

      it("Should not fall below 0", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
      });
    });


  });



});
