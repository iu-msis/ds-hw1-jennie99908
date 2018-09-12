var nameApp = new Vue({
  el: '#nameTable',
  data: {
    "results": [
    {
      "gender": '',
      "name": {
        "title": '',
        "first": 'j',
        "last": 'd'
      },
      "location": {
        "street": '',
        "city": '',
        "state": '',
        "postcode": '',
        "coordinates": {
          "latitude": '',
          "longitude": ''
        },
        "timezone": {
          "offset": '',
          "description": ''
        }
      },
      "email": '',
      "login": {
        "uuid": '',
        "username": '',
        "password": '',
        "salt": '',
        "md5": '',
        "sha1": '',
        "sha256": ''
      },
      "dob": {
        "date": '',
        "age": ''
      },
      "registered": {
        "date": '',
        "age": ''
      },
      "phone": '',
      "cell": '',
      "id": {
        "name": '',
        "value": ''
      },
      "picture": {
        "large": '',
        "medium": '',
        "thumbnail": ''
      },
      "nat": ''
    }
  ],
  "info": {
    "seed": '',
    "results": '',
    "page": '',
    "version": ''
  } },

    computed: {
      current_age: function() {
        return moment(this.target_date).diff(moment(), 'years');
      }},

    methods: {
      pretty_bod: function(d)
      {
        return moment(d).format('l');
      },

      log (msg) {
        alert(msg);
      },

      pretty_currency: function (val)
      {
        if(val <1e3) {return '$ ' + val}
        if(val <1e6) {return '$ ' + (val/1e3).toFixed(1) + ' K'}
          return '$ ' + (val/1e6).toFixed(1) + ' M'
      },

      complete_class: function(task) {
        if (task.perc_complete == 100 ) {return 'alert-success'}
        if (task.current_sprint && task.hours_worked ==0 ) {return 'alert-warning'}
      },

     fetch_tasks : function() {
        fetch('https://randomuser.me/api/')
        .then( result => result.json())
        .then(json => {
          nameApp.results = json;
        console.log(json);
        console.log(this.results);
      })
        .catch(function (err) {
          console.log('RESULT FETCH ERROR:');
          console.log(err);
        })
      },

      mounted ()
      {
          this.fetch_results();
  }}})
