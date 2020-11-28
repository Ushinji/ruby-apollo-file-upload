# frozen_string_literal: true

class Post < ApplicationRecord
  validates :display_name, presence: true
  validates :image, presence: true
end
