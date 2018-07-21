(function(exports){

  function changeQuality(amount_to_change_by, current_quality) {
    current_quality += amount_to_change_by
    current_quality = qualityFlooredAtZero(current_quality)
    current_quality = qualityCappedAtFifty(current_quality)
    return current_quality
  };

  function qualityFlooredAtZero(current_quality){
    if (current_quality < 0) {
      current_quality = 0
    }
    return current_quality
  };

  function qualityCappedAtFifty(current_quality){
    if (current_quality > 50) {
      current_quality = 50
    }
    return current_quality
  };

  exports.QualityContoller = {
    changeQuality: changeQuality
  };
})(this);
