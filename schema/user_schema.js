//schema.js
var {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt
} = require('graphql');

let count = 0;

const userData = require('../static_data/user.json');
//数据模型
const User = new GraphQLObjectType({
    name: 'User',
    description: 'User对象',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
});
//
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: User,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: function (_, args) {
                return userData[args.id];
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: Query
});
module.exports = Schema;