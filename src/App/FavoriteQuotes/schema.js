import { schema } from 'normalizr'

const mergeStrategy = (entityA, entityB) => ({
  ...entityA,
  ...entityB,
  quotes: [...(entityA.quotes || []), ...(entityB.quotes || [])]
})

const processStrategy = (value, parent, key) => {
  switch(key) {
    case 'author_permalink':
      return { ...value, selected: false, quotes: [parent.id] }
    case 'tags':
      return { ...value, selected: false, quotes: [parent.id] }
    default:
      return { ...value }
  }
}

const author = new schema.Entity(
  'authors',
  {},
  {
    mergeStrategy,
    processStrategy
  }
)


const tag = new schema.Entity(
  'tags',
  {},
  {
    idAttribute: value => value.name,
    mergeStrategy,
    processStrategy
  }
)

const quoteProcessStrategy = (entity) => {
  // omit these properties
  const {
    dialogue,
    downvotes_count,
    favorites_count,
    upvotes_count,
    url,
    author,
    author_permalink,
    tags,
    ...rest
  } = entity

  //override author and tags properties for normalizr
  return {
    ...rest,
    author: author,
    author_permalink: {
      id: author_permalink,
      name: author
    },
    tags: tags.map(item => ({
      id: item,
      name: item
    })),
    favorite: true
  }
}

const quote = new schema.Entity(
  'quotes',
  {
    author_permalink: author,
    tags: [tag]
  },
  {
    processStrategy: quoteProcessStrategy
  }
)

export default [quote]