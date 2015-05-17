Template.ftCollectionsUpdate.events({
  'click .save-btn': function () {
    $('#ftCollectionsUpdateForm').submit();
  }
});

AutoForm.addHooks('ftCollectionsUpdateForm', {
  onSuccess: function() {
    Router.go(this.collection.indexPath());
  }
});
