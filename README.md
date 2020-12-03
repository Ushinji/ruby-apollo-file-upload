## What is this?
Image Upload Form using multipart/form-data.

## Tech stack
- ServerSide
  - Ruby: 2.7.2
  - Ruby on Rails: 6.0.3
  - [graphql-ruby](https://github.com/rmosolgo/graphql-ruby)
  - [apollo_upload_server-ruby](https://github.com/jetruby/apollo_upload_server-ruby)

- Frontend
  - TypeScript: 4.1.2
  - React.js: 17.0.1
  - [apollo-client](https://github.com/apollographql/apollo-client)
  - [apollo-upload-client](https://github.com/jaydenseric/apollo-upload-client)


## Setup

- build

```
$ docker-compose build

$ docker-compose run --rm app bundle install
$ docker-compose run --rm app bundle exec rails db:create
$ docker-compose run --rm app bundle exec rails db:migrate

$ docker-compose run --rm frontend npm install
```

## Start

- docker-compose up
```
$ docker-compose up -d

$ docker-compose ps
                Name                              Command               State           Ports
------------------------------------------------------------------------------------------------------
ruby-apollo-file-uploader_app_1        bundle exec rails s -p 300 ...   Up      0.0.0.0:3000->3000/tcp
ruby-apollo-file-uploader_frontend_1   npm start                        Up      0.0.0.0:3001->3001/tcp
```

- Access to http://localhost:3000

## Generate graphql schema

- ServerSide

```
$ docker-compose run --rm app bundle exec rails graphql:dump_schema
src/graphql/generated/schema.graphql updated.
```

- Frontend

```
$ npm run codegen
> graphql-codegen --config codegen.yml

  ✔ Parse configuration
  ✔ Generate outputs
```

