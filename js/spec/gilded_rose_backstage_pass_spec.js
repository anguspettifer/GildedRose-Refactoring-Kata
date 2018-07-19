describe("AgedBrie", function() {

  it("The sellin should reduce by one", function() {
    const agedBrie = new AgedBrie(5,10);
    agedBrie.updateSellIn();
    expect(agedBrie.sellIn).toEqual(4);
  });

  describe('quality', function(){
    it("Should increase by 1 in sell by date", function() {
      const agedBrie = new AgedBrie(5,10);
      agedBrie.updateQuality();
      expect(agedBrie.quality).toEqual(11);
    });

    it("Should increase by 2 after sell by date", function() {
      const agedBrie = new AgedBrie(0,10);
      agedBrie.updateQuality();
      expect(agedBrie.quality).toEqual(12);
    });

    it("Should not rise above 50", function() {
      const agedBrie = new AgedBrie(0,49);
      agedBrie.updateQuality();
      expect(agedBrie.quality).toEqual(50);
    });
  });

});
