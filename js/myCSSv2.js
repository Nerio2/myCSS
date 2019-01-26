const dottedProgressBars=document.querySelectorAll('.dotted-progress-bar');
dottedProgressBars.forEach((elem, index)=>{
  init(elem);
});

function init(obj){
  const progress=parseFloat(obj.innerHTML);
  obj.classList.add('row');
  let content="";
  for(i=0;i<5;i++)
    content+='<div class="col-2 square"><div class="progress-bar-dot"></div></div>';
  obj.innerHTML=content;
  const divs=obj.querySelectorAll('.square');
  for(i=0;i<parseInt(progress);i++){
    divs[i].querySelector('div').classList.add('progress-bar-dot-marked');
  }
  if(progress%1>0){
    const decimalProgress=(progress-parseInt(progress))*100;
    divs[parseInt(progress)].querySelector('div')
      .classList.add('progress-bar-dot-mixed');
    divs[parseInt(progress)].querySelector('div').setAttribute(
      'style','--progress: '+(decimalProgress-5)+"%;"+
      '--progress-fade: '+(decimalProgress+5)+"%;");
  }
}
