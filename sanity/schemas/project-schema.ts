


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
          title: "Categories",
          description: "Choose some tags that identify your project",
          name: "categories",
          type: "array",
          of: [{
            name: 'category',
            title: 'Category',
            type: 'string'
          }]
        },
        {
          name:"projectType",
          title: 'Project type',
          type: 'array',
          of: [{
            title: "Type of Project",
            description: "Pick the format  or formats of your project",
            name: "type",
            type: "string",
            options: {
              list: [
                { title: "Illustration", value: "Illustration" },
                { title: "Motion", value: "Motion" },
              ],
            },
            validation: (Rule: any) => Rule.required(),
          }]
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
          name:"highlighted",
          title: 'Highlighted project',
          description: "Put in true if this project is highlighted",
          type: 'boolean',
        },
        {
            name:'content',
            title: 'Content',
            type: 'array',
            of: [
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
              },
                {
                  type: 'block'
                },
                {
                  type: 'vimeo'
                },
                {
                  type: 'youtube'
                },
                
              ]
        }
    ]

}

export default project;