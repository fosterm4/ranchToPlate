// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'ranch',
      type: 'document',
      title: 'Ranch',
      fields:[
        {
          name: 'ranchName',
          type: 'string',
          title: 'Ranch Name'
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'ranchName',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200)
          }
        },
        {
          name: 'profileImage',
          type: 'image',
          title: 'Profile Image',
        },
        {
          name: 'headerImage',
          type: 'image',
          title: 'Header Image',
        },
        {
          name: 'address',
          type: 'string',
          title: 'Address'
        },
        {
          name: 'state',
          type: 'string',
          title: 'State'
        },
        {
          name: 'zip',
          type: 'number',
          title: 'Zip Code'
        },
        {
          name: 'email',
          type: 'email',
          title: 'Email'
        },
        {
          name: 'phone',
          type: 'number',
          title: 'Phone Number'
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description'
        },
        {
          name: 'publishDate',
          type: 'date',
          title: 'Date Published'
        },
        {
          name: 'keywords',
          type: 'array',
          of: [{type: "keyword"}],
          title: 'Keywords'
        },
        {
          name: 'extraImages',
          type: 'array',
          of: [{type: "image"}],
          title: 'Extra Images'
        },
      ],
    },
    {
      name: 'keyword',
      type: 'document',
      title: 'Keyword',
      fields:[
        {
          name: 'keyword',
          type: 'string',
          title: 'Keyword'
        },
      ]
    }
  ])
})
