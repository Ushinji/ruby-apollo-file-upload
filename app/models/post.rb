# frozen_string_literal: true

class Post < ApplicationRecord
  mount_uploader :image, ImageUploader

  validates :display_name, presence: true
  validates :image, presence: true
end
