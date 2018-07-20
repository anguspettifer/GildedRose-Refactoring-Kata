describe ('update', function(){

  it("The quality should reduce by one", function() {
    var current_quality = 10;
    var amount_to_change_by = -1;
    expect(Update.changeQuality(amount_to_change_by,current_quality)).toEqual(9);
  });

  it("The quality should increase by one", function() {
    var current_quality = 10;
    var amount_to_change_by = 1;
    expect(Update.changeQuality(amount_to_change_by,current_quality)).toEqual(11);
  });

  it("The quality is capped at 50", function() {
    var current_quality = 50;
    var amount_to_change_by = 1;
    expect(Update.changeQuality(amount_to_change_by,current_quality)).toEqual(50);
  });

  it("The quality is floored at 0", function() {
    var current_quality = 0;
    var amount_to_change_by = -1;
    expect(Update.changeQuality(amount_to_change_by,current_quality)).toEqual(0);
  });
  //
  // it("The quality is set to 0", function() {
  //   const update = new Update(5,30);
  //   update.qualitySetToZero();
  //   expect(update.quality).toEqual(0);
  // });

})
