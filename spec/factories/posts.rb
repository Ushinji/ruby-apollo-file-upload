# frozen_string_literal: true

FactoryBot.define do
  sequence :display_name do |n|
    "DISPLAY_NAME#{n}"
  end

  factory :post do
    image { Rack::Test::UploadedFile.new(File.join(Rails.root, "spec/fixtures/image.png")) }
    display_name { generate(:display_name) }
  end
end
