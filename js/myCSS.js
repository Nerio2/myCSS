$(()=>{
  var dottedProgressBars=$(".dotted-progress-bar");
  dottedProgressBars.addClass('row');
  var divs="";
  for(i=0;i<5;i++)divs+='<div class="col-2 square"><div class="progress-bar-dot"></div></div>';
  dottedProgressBars.html(divs);
  dottedProgressBars.each(function(index, el) {
    if($(el).hasClass('progress-1')){mark(el,1);}
    else if($(el).hasClass('progress-2')){mark(el,2);}
    else if($(el).hasClass('progress-3')){mark(el,3);}
    else if($(el).hasClass('progress-4')){mark(el,4);}
    else if($(el).hasClass('progress-5')){mark(el,5);}
  });

});

function mark(obj,progress){
  var divs=$(obj).children();
  for(var i=0;i<progress;i++){
    $(divs[i]).children().addClass('progress-bar-dot-marked');
  }
}
