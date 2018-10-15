var commentsApp = new Vue({
  el: '#commentMain',
  data: {
    task: {
      id: 0,
      comment: 'foo',
    },

    commentForm: { },   // populated by this.getEmptyWorkForm()
    comment: [ ]
  },

  methods: {
    handleCommentForm(e) {


      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.comment.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.commentForm = this.getEmptyCommentForm();
    },

    getEmptyWorkForm() {
      return {
        comment: NULL
      }
    },

  created () {

    // Do data fetch
    const url = new URL(window.location.href);


    if (!id) {
      //TODO: Error? 404?
      //e.g., window.location = '404.html';
    }

    // Populate workForm with default values
    this.commentForm = this.getEmptyCommentForm();

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.comment = json} )
    .catch( err => {
      console.error('COMMENT FETCH ERROR:');
      console.error(err);
    })
  }
}
})
