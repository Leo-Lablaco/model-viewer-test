$(document).ready(function() {
    var modelviewerSrc = $("model-viewer").attr("src");
    // $("#titleInput").change(function(e) {
    //   var title = $("#titleInput").val();
    //   var modelviewerUpdatedSrc = `${modelviewerSrc}&title=${title}`;
    //   console.log(modelviewerUpdatedSrc);
      
    //   $("model-viewer").attr("src", modelviewerUpdatedSrc);
    // })  
    var modelviewerUpdatedSrc = `${modelviewerSrc}&title=Title%20of%20garment&link=https://spin.lablaco.com/tokenizedProduct/5326e1cf-219d-4c24-94eb-b105446fea1c/`;
       console.log(modelviewerUpdatedSrc);
      
       $("model-viewer").attr("src", modelviewerUpdatedSrc);
  })