Options.init('homePath')
Options.init('siteName');

ReactiveTemplates.request('tabs', 'ftTabs');

ReactiveTemplates.set('layout', 'ftLayout');
ReactiveTemplates.set('outAdminLayout', 'ftOutAdminLayout');

ReactiveTemplates.set('links', 'ftSidebar');
ReactiveTemplates.set('login', 'ftLogin');
ReactiveTemplates.set('registerWithInvitation', 'ftRegisterWithInvitation');

ReactiveTemplates.set('myAccount.index', 'ftAccountIndex');
ReactiveTemplates.set('myAccount.password', 'ftAccountPassword');
ReactiveTemplates.set('myAccount.profile', 'ftAccountProfile');

ReactiveTemplates.set('accounts.index', 'ftAccountsIndex');
ReactiveTemplates.set('accounts.update.roles', 'ftAccountsUpdateRoles');
ReactiveTemplates.set('accounts.invite', 'ftAccountsInvite');

ReactiveTemplates.set('configUpdate', 'ftConfigUpdate');
ReactiveTemplates.set('dictionaryUpdate', 'ftDictionaryUpdate');

// Set the default entity templates
Options.set('collectionsDefaultIndexTemplate', 'ftCollectionsIndex');
Options.set('collectionsDefaultCreateTemplate', 'ftCollectionsCreate');
Options.set('collectionsDefaultUpdateTemplate', 'ftCollectionsUpdate');
Options.set('collectionsDefaultDeleteTemplate', 'ftCollectionsDelete');

// Pages
ReactiveTemplates.set('pages.index', 'ftPagesIndex');
ReactiveTemplates.set('pages.create', 'ftPagesCreate');
ReactiveTemplates.set('pages.update', 'ftPagesUpdate');
ReactiveTemplates.set('pages.delete', 'ftPagesDelete');
