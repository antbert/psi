/**
 * Created by alehatsman on 4/20/15.
 */

Router.route('/conference', function() {
  this.layout('main');
  this.render('conference');
}, {
  name: 'conference'
});