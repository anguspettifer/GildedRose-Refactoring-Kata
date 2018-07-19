describe("BackstagePass", function() {

  it("The sellin should reduce by one", function() {
    const backstagePass = new BackstagePass(5,10);
    backstagePass.updateSellIn();
    expect(backstagePass.sellIn).toEqual(4);
  });

  describe('quality', function(){
    it("Should increase by 1 when there are more than 10 days to sell by date", function() {
      const backstagePass = new BackstagePass(11,10);
      backstagePass.updateQuality();
      expect(backstagePass.quality).toEqual(11);
    });

    it("Should increase by 2 when there are 10 days or less to sell by date", function() {
      const backstagePass = new BackstagePass(10,10);
      backstagePass.updateQuality();
      expect(backstagePass.quality).toEqual(12);
    });

    it("Should increase by 3 when there are 5 days or less to sell by date", function() {
      const backstagePass = new BackstagePass(5,10);
      backstagePass.updateQuality();
      expect(backstagePass.quality).toEqual(13);
    });

    it("Should fall to zero when sell by date is less than zero", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10) ]);
      const items = gildedRose.update();
      expect(items[0].quality).toEqual(0);
    });

    it("Should not rise above 50", function() {
      const backstagePass = new BackstagePass(5,49);
      backstagePass.updateQuality();
      expect(backstagePass.quality).toEqual(50);
    });
  });

});
