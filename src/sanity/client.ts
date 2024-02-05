import {createClient} from '@sanity/client'
export default createClient({
  projectId: '0h423ckl', // Find this at manage.sanity.io or in your sanity.json
  dataset: 'nious-data-set', // or the name of your dataset
  apiVersion: '2022-03-07', // use a UTC date string
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
});
