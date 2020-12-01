# frozen_string_literal: true

require "rails_helper"

describe "GraphQL Query Posts" do
  subject { post graphql_path(query: query, variables: nil) }

  let(:query) do
    <<-GRAPHQL
    query {
      posts {
        id
        image
        displayName
        createdAt
        updatedAt
      }
    }
    GRAPHQL
  end

  let(:posts) { create_list(:post, 2) }

  context "正常系" do
    before { posts }
    after { posts.each { |post| post.image.remove! } }

    it "200 OKを返すこと" do
      subject
      expect(response).to have_http_status(:ok)
    end

    it "Post一覧を返すこと" do
      subject

      json = JSON.parse(response.body)
      res = json["data"]["posts"]

      expect(res[0]["id"]).to eq(posts[0].id.to_s)
      expect(res[0]["image"]).to eq(posts[0].image.url)
      expect(res[0]["displayName"]).to eq(posts[0].display_name)
      expect(res[0]["createdAt"]).to eq(posts[0].created_at.iso8601)
      expect(res[0]["updatedAt"]).to eq(posts[0].created_at.iso8601)

      expect(res[1]["id"]).to eq(posts[1].id.to_s)
      expect(res[1]["image"]).to eq(posts[1].image.url)
      expect(res[1]["displayName"]).to eq(posts[1].display_name)
      expect(res[1]["createdAt"]).to eq(posts[1].created_at.iso8601)
      expect(res[1]["updatedAt"]).to eq(posts[1].created_at.iso8601)
    end
  end
end
