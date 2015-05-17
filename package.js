Package.describe({
  name: 'orionjs:bootstrap-famous',
  summary: 'Famous theme for orion',
  version: '0.0.1',
  git: 'https://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
api.use('mjn:famous@0.3.5', 'client', { weak: true });
api.use('raix:famono@0.9.27', { weak: true });
  api.use([
    'meteor-platform',
            'coffeescript',
    'mquandalle:jade@0.4.1',
    'orionjs:core@1.0.0',
        'aldeed:autoform@5.1.2',
        // 'aldeed:tabular@1.2.0',
      'zimme:iron-router-active@1.0.4',
    'iron:layout@1.0.7',
    'aldeed:tabular@1.1.0',
    'useraccounts:bootstrap@1.8.1',
    'fortawesome:fontawesome',
    'orionjs:filesystem',
    'orionjs:s3',
    'orionjs:summernote',
    'orionjs:froala',
    'orionjs:file-attribute',
    'orionjs:relationships',
    'reywood:publish-composite',
    'dburles:collection-helpers',
    'gadicohen:famous-views@0.1.32',
    'gadicohen:fview-flex@0.0.5',
    'pierreeric:cssc@1.0.4',
    'pierreeric:cssc-normalize@1.0.1',
    'pierreeric:cssc-colors@1.0.4',
    'pierreeric:cssc-famous@1.0.2',
    'gadicohen:reactive-window',
    'underscorestring:underscore.string@3.0.3_1',
    'useraccounts:famous-wrapper@1.9.1',
    'mquandalle:stylus',
    'pierreeric:fview-rwdsimplemenu',
    'timfam:cssc-bootstrap@0.0.3',
        ]);

  api.imply([
   
    'useraccounts:bootstrap',
    'orionjs:core',
    'coffeescript',
        'mquandalle:jade',
    'orionjs:core',
    'aldeed:autoform',
    // 'aldeed:tabular',
    'useraccounts:famous-wrapper',
      'iron:layout',
    'underscorestring:underscore.string',
    'zimme:iron-router-active',
      'gadicohen:famous-views',
      'gadicohen:fview-flex',
      'pierreeric:cssc',
  'pierreeric:cssc-normalize',
  'pierreeric:cssc-colors',
    'pierreeric:cssc-famous',
    'gadicohen:reactive-window',
    'mquandalle:stylus',
    ]);

  api.addFiles([
    'init.js',
    'tabular.js'
    ]);

  api.addFiles([
                   'views/layout/layouts.jade',
    'views/layout/layout.html',
    'views/layout/layout.js',
    // 'views/layout/layout.less',
    // 'views/sidebar/sidebar.html',
    // 'views/sidebar/sidebar.less',
    'views/accounts/register-with-invitation.html',
    'views/accounts/index.html',
    'views/accounts/password.html',
    'views/accounts/profile.html',
    'views/accounts/profile.js',
    // 'views/accounts/accounts.less',
    'views/accounts/accounts.html',
    'views/accounts/roles.html',
    'views/accounts/invite.html',
    'views/config/update.html',
    'views/config/update.js',
    'views/dictionary/update.html',
    'views/dictionary/update.js',
    'views/collections/index.html',
    'views/collections/index.js',
    'views/collections/index.less',
    'views/collections/create.html',
    'views/collections/create.js',
    'views/collections/update.html',
    'views/collections/update.js',
    'views/collections/delete.html',
    'views/pages/index.html',
    'views/pages/create.html',
    'views/pages/update.html',
    'views/pages/delete.html',
    'views/pages/pages.js',
     'views/shared/main.coffee',
     // 'views/styles/bootstrap.coffee',
    'views/styles/famous.coffee',
    ], 'client');

  api.export('orion');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('orionjs:core');
});
