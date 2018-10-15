var commentsApp = new Vue({
  el: '#commentMain',
  data: {
    commentdata: {
      id: 0,
      comment: '',
    },

    commentForm: { },   // populated by this.getEmptyWorkForm()
    commentList: []
  },

  methods: {
    //handleCommentForm(e) {


      // POST to remote server
      //fetch('api/comment.php', {
        //method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     headers: {
    //         "Content-Type": "application/json; charset=utf-8"
    //     },
    //     body: s // body data type must match "Content-Type" header
    //   })
    //   .then( response => response.json() )
    //   .then( json => {this.comment.push(json)})
    //   .catch( err => {
    //     console.error('COMMENT POST ERROR:');
    //     console.error(err);
    //   })
    //
    //   // Reset workForm
    //   this.commentForm = this.getEmptyCommentForm();
    // },

    getEmptyCommentForm : function(e) {
      return {
        comment: this.commentdata.comment
      }
    },

  created () {
    // Populate workForm with default values
    this.commentForm = this.getEmptyCommentForm();

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.commentList = json} )
    .catch( err => {
      console.error('COMMENT FETCH ERROR:');
      console.error(err);
    })
  }
}
})
