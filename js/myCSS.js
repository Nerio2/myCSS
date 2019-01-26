var dottedProgressBars=$(".dotted-progress-bar");
dottedProgressBars.each((index, el)=>{
  init($(el));
});

function init(obj){
  var progress=parseFloat($(obj).html());
  $(obj).addClass('row');
  var div="";
  for(i=0;i<5;i++)
    div+='<div class="col-2 square"><div class="progress-bar-dot"></div></div>';
  $(obj).html(div);
  var divs=$(obj).children();
  for(var i=0;i<parseInt(progress);i++){
    $(divs[i]).children().addClass('progress-bar-dot-marked');
  }
  if(progress%1>0){
    var decimalProgress=(progress-parseInt(progress))*100;
    $(divs[parseInt(progress)]).children()
      .addClass('progress-bar-dot-mixed');
    $(divs[parseInt(progress)]).children()
      .css("--progress",decimalProgress-5+"%")
      .css("--progress-fade",decimalProgress+5+"%");
  }
}

//old version with jquery
