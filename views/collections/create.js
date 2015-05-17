Template.ftCollectionsCreate.events({
  'click .create-btn': function () {
    $('#ftCollectionsCreateForm').submit();
  }
});


AutoForm.addHooks('ftCollectionsCreateForm', {
  onSuccess: function() {
    Router.go(this.collection.indexPath());
  }
});
