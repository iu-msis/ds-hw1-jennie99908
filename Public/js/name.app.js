var nameApp = new Vue({
  el: '#nameTable',
  data: {
    "person":  {
      "gender": '',
      "name": {
        "title": '',
        "first": '',
        "last": ''
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
},

    computed: {
      current_age: function() {
        return moment().diff(moment(this.person.dob.date), 'years');
      }
    },

    methods: {
      pretty_date: function(d)
      {
        return moment(d).format('l');
      },

      log (msg) {
        alert(msg);
      },


      fetch_results : function() {
         fetch('https://randomuser.me/api/')
         .then( response => response.json())
         .then(json => {
           nameApp.person = json.results[0];
         // console.log(json);
         console.log(nameApp.person);
       })
         .catch(function (err) {
           console.log('RESULT FETCH ERROR:');
           console.log(err);
         })
       },

    },

     created (){
         this.fetch_results();
     }
})
