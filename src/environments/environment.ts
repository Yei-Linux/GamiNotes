// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    baseUrl: 'http://127.0.0.1:5000/gami-notes/api/v1',
    topics: {
      findAll: '/topics',
      findById: '/topics/{{id}}',
      create: '/topics',
      udpate: '/topics/{{id}}',
      delete: '/topics/{{id}}',
      findTopicWithNotes: '/topics/{{id}}/notes',
    },
    notes: {
      findAll: '/notes',
      findById: '/notes/{{id}}',
      create: '/notes',
      udpate: '/notes/{{id}}',
      delete: '/notes/{{id}}',
    },
    shared: {
      topics: {
        create: '/shared/topics',
        findById: '/shared/topics/{{id}}',
      },
      public: {
        findById: '/public/topics/shared/{{id}}',
      },
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
