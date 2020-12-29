export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5feb6f170458ef985cd64b7b',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-zj76ij9d',
                  apiId: 'd8803795-ecc1-4fc9-ae1a-8b9f765a830a'
                },
                {
                  buildHookId: '5feb6f1717578e6fd92fa93a',
                  title: 'Blog Website',
                  name: 'sanity-test-web-eu38vp49',
                  apiId: 'c3d89e24-fbec-4ea6-9004-55f95805376f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/artcups/sanity-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-test-web-eu38vp49.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
