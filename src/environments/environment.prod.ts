export const environment = {
  production: true,
  api: {
    baseUrl: 'http://gaminotes/gami-notes/api/v1',
    topics: {
      findAll: '/topics',
      findById: '/topics/{{id}}',
      create: '/topics',
      udpate: '/topics/{{id}}',
      findTopicWithNotes: '/topics/{{id}}/notes',
    },
    notes: {
      findAll: '/notes',
      findById: '/notes/{{id}}',
      create: '/notes',
      udpate: '/notes/{{id}}',
    },
    shared: {
      topics: {
        create: '/shared/topics',
        findById: 'shared/topics/{{id}}',
      },
    },
  },
};
