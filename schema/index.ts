import apiSchema from './schema'
import query from './query'
import mutation from './mutation'

const resolvers = {
    ...query, ...mutation,
};

export const resolver = resolvers;
export const schema = apiSchema;