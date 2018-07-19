describe ('update', function(){

  it("The sellin should reduce by one", function() {
    const update = new Update(5,10);
    update.sellOut();
    expect(update.sellIn).toEqual(4);
  });

  it("The quality should reduce by one", function() {
    const update = new Update(5,10);
    update.qualityReduceOne();
    expect(update.quality).toEqual(9);
  });

  it("The quality should increase by one", function() {
    const update = new Update(5,10);
    update.qualityIncreaseOne();
    expect(update.quality).toEqual(11);
  });

  it("The quality is capped at 50", function() {
    const update = new Update(5,50);
    update.qualityIncreaseOne();
    expect(update.quality).toEqual(50);
  });

  it("The quality is floored at 0", function() {
    const update = new Update(5,0);
    update.qualityReduceOne();
    expect(update.quality).toEqual(0);
  });

  it("The quality is set to 0", function() {
    const update = new Update(5,30);
    update.qualitySetToZero();
    expect(update.quality).toEqual(0);
  });

})
