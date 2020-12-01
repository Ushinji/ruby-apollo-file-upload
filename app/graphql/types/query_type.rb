# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :posts, [Types::PostType], null: false

    def posts
      Post.all
    end
  end
end
