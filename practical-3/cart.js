let added = false;
function buttonAnimation (button) {
  let done = button.getElementsByClassName("done")[0];
  if(added){
    done.style.transform = "translate(-110%) skew(-40deg)";
    added = false;
  }
  else{
    done.style.transform = "translate(0px)";
    added = true;
  }
}