describe("Gilded Rose", function() {

  describe('Backstage passes to a TAFKAL80ETC concert', function(){
    it("The name should not change", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    });

    it("The sellin should reduce by one", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
    });

    describe('quality', function(){
      it("Should increase by 1 when there are more than 10 days to sell by date", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(11);
      });

      it("Should increase by 2 when there are 10 days or less to sell by date", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(12);
      });

      it("Should increase by 3 when there are 5 days or less to sell by date", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(13);
      });

      it("Should not rise above 50", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
      });
    });


  });



});
