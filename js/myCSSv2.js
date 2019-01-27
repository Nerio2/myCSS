const dottedProgressBars=document.querySelectorAll('.dotted-progress-bar');
dottedProgressBars.forEach((elem, index)=>{
  init(elem);
});

function init(obj){
  let progress=0;
  const value=obj.innerHTML;
  if(value.indexOf('%')!=-1){
    progress=parseFloat(value)/20;
  }
  else if(value.indexOf('/')!=-1){
    progress=parseFloat(value.slice(0,value.indexOf('/')));
    let den=parseFloat(value.slice(value.indexOf('/')+1));
    let den2=den/5;
    progress/=den2;
  }else
    progress=parseFloat(value);
  if(progress>5)progress=5;
  else if(progress<0)progress=0;
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
