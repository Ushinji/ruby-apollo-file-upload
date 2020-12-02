# frozen_string_literal: true

module Mutations
  class CreatePost < BaseMutation
    field :post, Types::PostType, null: false

    argument :display_name, String, required: true
    argument :image, ApolloUploadServer::Upload, required: true

    def resolve(display_name:, image:)
      post = Post.new(display_name: display_name, image: image)
      post.save!
      { post: post }
    end
  end
end
