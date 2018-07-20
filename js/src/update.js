(function(exports){

  function changeQuality(amount_to_change_by, current_quality) {
    current_quality += amount_to_change_by
    if (current_quality > 50) {
      current_quality = 50
    }
    if (current_quality < 0) {
      current_quality = 0
    }
    return current_quality
  };

  exports.Update = {
    changeQuality: changeQuality
  };
})(this);
