
Template.registerHelper('conSurface1', -> 
    size: [undefined, undefined]
    # properties: 
      # color: 'green',
      # textAlign: 'center'
      # backgroundColor: 'gray'
      # paddingLeft:'10px'
  )

@mainMenu = new RwdSimpleMenu


# RwdSimpleMenu.get (menu) ->
#   menu.addRoute 'profile',ic: 'fa-user', lbl: ' Profile'

#   menu.removeRoute 'signin'
# links = Options.get('links')
# _.each(links, (value, key, list)->
#   console.log(value)
#   )
# linkss = _.where(links, { section: 'medium' });
# console.log(linkss)
@dictionaryReady = ->
    !!orion.dictionary.findOne()

if dictionaryReady()
  links = Options.get('links')
  console.log(dictionaryReady())
  for link in links
    linkRoute= s.dasherize(link.activeRouteRegex)
    # console.log(link)
    mainMenu.addRoute 'admin/'+linkRoute, 'fa-user', link.title

# menuLinks =  ->
#   # make sure dictionary is ready
#   @dictionaryReady = ->
#     !!orion.dictionary.findOne()
#   # Now check user right to via menu
#   # @checkPerm = ->/
#   # 
#   if dictionaryReady()
#     links = Options.get('links')
#   # section = ['top', 'medium', 'bottom']
#   # if section
#   # links = _.where(links, section: section)
#     _.each links, (value, key, list) ->
#       if value.permission
#         if !Roles.userHasPermission(Meteor.userId(), value.permission)
#           delete list[key]
#           linkRoute= s.dasherize(value.activeRouteRegex)
#           console.log(linkRoute)
#           mainMenu.addRoute 'admin/'+linkRoute, 'fa-user', value.title
#           return
#   return


# menuLinks()
