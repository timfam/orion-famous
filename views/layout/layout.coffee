# Template.ptLayout.onRendered ->
   # $(".button-collapse").sideNav();

# Template.ptTabs.onRendered ->
#   this.$('ul.tabs').tabs();

# Template.ptTabs.helpers 
#   items: ->
#     return this;

# Template.ptTabs.events
#   'click a': ->
#     this.onClick();
# Template.ptHeaderContainer.helpers
#   snipSurface:
#     size: [undefined, 200]
#     properties: 
#       color: 'green',
#       textAlign: 'center'

# Template.ptLayout.helpers
#   centermod:
#     align: [0.5, 0.5]
#     origin: [0.5, 0.5]
#   snip2:
#     size: [200, 200]
#     properties: 
#       color: 'green',
#       backgroundColor: '#FA5C4F',
#       textAlign: 'center'
#       border: '2px solid rgb(210, 208, 203)',
      # marginTop: '50px',
      # marginLeft: '50px'
# @mainMenu = new RwdSimpleMenu
# mainMenu.addRoute 'signin', 'fa-sign-in', ' Sign in'
# mainMenu.addRoute 'signout', 'fa-sign-out', ' Sign out'
# mainMenu.addRoute 'profile', 'fa-user', ' Profile'
# mainMenu.addRoute 'company', 'fa-building', ' Company'

# RwdSimpleMenu.get (menu) ->
#   menu.addRoute 'profile',ic: 'fa-user', lbl: ' Profile'
#   menu.addRoute 'companies', ic: 'fa-building', lbl: ' Sociétés'
#   menu.addRoute 'signout', ic: 'fa-sign-out', lbl: ' Quitter'
#   menu.removeRoute 'signin'
