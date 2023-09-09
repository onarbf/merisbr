const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: "name",
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(10).max(80)
        },
        {
            name: "slug",
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: 'true'},
            fields: [
                {name:'alt',
                title: 'Alt',
            type: 'string'}
            ],
            validation: (Rule: any) => Rule.required()
        },
        {
            name:'url',
            title:'url',
            type: 'url'
        },
        {
            name:'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                  type: 'block'
                },
                {
                  type: 'image',
                  fields: [
                    {
                      type: 'text',
                      name: 'alt',
                      title: 'Alternative text',
                      description: `Some of your visitors cannot see images, 
                        be they blind, color-blind, low-sighted; 
                        alternative text is of great help for those 
                        people that can rely on it to have a good idea of 
                        what\'s on your page.`,
                      options: {
                        isHighlighted: true
                      }
                    }
                  ]
                }
              ]
        }
    ]

}

export default project;