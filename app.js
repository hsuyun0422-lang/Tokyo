function switchTab(id, btn) {
  document.querySelectorAll('.sec').forEach(function(s) { s.classList.remove('on'); });
  document.querySelectorAll('#mainnav button').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById(id).classList.add('on');
  btn.classList.add('active');
}

function switchAge(id, btn) {
  document.querySelectorAll('.cl-ver').forEach(function(v) { v.classList.remove('on'); });
  document.querySelectorAll('.age-btn').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById(id).classList.add('on');
  btn.classList.add('active');
}
