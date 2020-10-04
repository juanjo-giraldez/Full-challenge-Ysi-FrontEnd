import Ember from 'ember';

export default Ember.Helper.helper(function([value]) {
 
  let today = new Date(value);
    let dd = today.getDate();
    let MM = today.getMonth()+1; //January is 0!
    let hh = today.getHours();
    let mm = today.getMinutes();
    let yyyy = today.getFullYear();

    if (dd<10) {
        dd= '0'+dd;
    }

    if (MM<10) {
        MM= '0'+MM;
    }

    if (hh<10) {
        hh= '0'+hh;
    }

    if (mm<10) {
        mm= '0'+mm;
    }

    today = dd+'/'+MM+'/'+yyyy+" "+hh+"h"+mm;

    return today;
  
});
