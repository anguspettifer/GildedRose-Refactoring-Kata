describe("Gilded Rose", function() {

  describe('foo', function(){
    it("The name should not change", function() {
      const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
      const items = gildedRose.update();
      expect(items[0].name).toEqual("foo");
    });

    it("The sellin should reduce by one", function() {
      const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
      const items = gildedRose.update();
      expect(items[0].sellIn).toEqual(-1);
    });

    describe('quality', function(){
      it("Should reduce by 1 in sell by date", function() {
        const gildedRose = new Shop([ new Item("foo", 1, 10) ]);
        const items = gildedRose.update();
        expect(items[0].quality).toEqual(9);
      });

      it("Should reduce by 2 after sell by date", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 10) ]);
        const items = gildedRose.update();
        expect(items[0].quality).toEqual(8);
      });

      it("Should not fall below 0", function() {
        const gildedRose = new Shop([ new Item("foo", 0, 1) ]);
        const items = gildedRose.update();
        expect(items[0].quality).toEqual(0);
      });
    });


  });

  describe('sulfuras', function(){
    it("The name should not change", function() {
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 0) ]);
      const items = gildedRose.update();
      expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros');
    });

    it("The sellin should not change", function() {
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 0) ]);
      const items = gildedRose.update();
      expect(items[0].sellIn).toEqual(0);
    });

    it("The quality should not change", function() {
      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 1, 10) ]);
      const items = gildedRose.update();
      expect(items[0].quality).toEqual(10);
    });

  });


  describe('Aged Brie', function(){
    it("The name should not change", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      const items = gildedRose.update();
      expect(items[0].name).toEqual("Aged Brie");
    });

    it("The sellin should reduce by one", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      const items = gildedRose.update();
      expect(items[0].sellIn).toEqual(-1);
    });

    describe('quality', function(){
      it("Should increase by 1 in sell by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 1, 10) ]);
        const items = gildedRose.update();
        expect(items[0].quality).toEqual(11);
      });

      it("Should increase by 2 after sell by date", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 0, 10) ]);
        const items = gildedRose.update();
        expect(items[0].quality).toEqual(12);
      });

      it("Should not rise above 50", function() {
        const gildedRose = new Shop([ new Item("Aged Brie", 1, 50) ]);
        const items = gildedRose.update();
        expect(items[0].quality).toEqual(50);
      });
    });


  });
  describe('Backstage passes to a TAFKAL80ETC concert', function(){
    it("The name should not change", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0) ]);
      const items = gildedRose.update();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    });

    it("The sellin should reduce by one", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0) ]);
      const items = gildedRose.update();
      expect(items[0].sellIn).toEqual(-1);
    });

    describe('quality', function(){
      it("Should increase by 1 when there are more than 10 days to sell by date", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10) ]);
        const items = gildedRose.update();
        expect(items[0].quality).toEqual(11);
      });

      it("Should increase by 2 when there are 10 days or less to sell by date", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ]);
        const items = gildedRose.update();
        expect(items[0].quality).toEqual(12);
      });

      it("Should increase by 3 when there are 5 days or less to sell by date", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10) ]);
        const items = gildedRose.update();
        expect(items[0].quality).toEqual(13);
      });

      it("Should not rise above 50", function() {
        const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50) ]);
        const items = gildedRose.update();
        expect(items[0].quality).toEqual(50);
      });
    });


  });



});
