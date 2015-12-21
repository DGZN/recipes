chrome.runtime.sendMessage({
    action: "getRecipe",
    recipe: getRecipe()
});

function getRecipe(){
  var recipe = $('.recipe,.content').clone()
  $(recipe).find('.publish-date').remove()
  $(recipe).find('.detail-top').remove()
  $(recipe).find('img').each(function(){
    var src = $(this).attr('src')
    $(this).attr('src', 'https:' + src)
  })
  $(recipe).prepend($('<img>', {
    class: 'featured-image'
  , src: 'https:' + $('.recipe-image').find('img').attr('src')
  }))
  return recipe.html()
}
