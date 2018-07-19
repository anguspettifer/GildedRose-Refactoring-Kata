describe("Foo", function() {

  it("The sellin should reduce by one", function() {
    const foo = new Foo(5,10);
    foo.updateSellIn();
    expect(foo.sellIn).toEqual(4);
  });

  describe('quality', function(){
    it("Should reduce by 1 in sell by date", function() {
      const foo = new Foo(5,10);
      foo.updateQuality();
      expect(foo.quality).toEqual(9);
    });

    it("Should reduce by 2 after sell by date", function() {
      const foo = new Foo(0,10);
      foo.updateQuality();
      expect(foo.quality).toEqual(8);
    });

    it("Should not fall below 0", function() {
      const foo = new Foo(0,1);
      foo.updateQuality();
      expect(foo.quality).toEqual(0);
    });
  });

});
