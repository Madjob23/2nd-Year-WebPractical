function buttonAnimation (button) {
  let added;
  let done = button.getElementsByClassName("done")[0];
  if (done.id == 'true') {
    added = true;
  } else {
    added = false;
  }
  if(added){
    done.style.transform = "translate(-110%) skew(-40deg)";
    done.id = 'false';
  }
  else{
    done.style.transform = "translate(0px)";
    done.id = 'true';
  }
}
