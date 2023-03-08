export default {
  name: 'activityImages',
  title: 'Activity Pictures',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
