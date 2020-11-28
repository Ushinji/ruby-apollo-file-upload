# frozen_string_literal: true

require "rails_helper"

RSpec.describe Post, type: :model do
  describe "バリデーション" do
    it { should validate_presence_of(:display_name) }
    it { should validate_presence_of(:image) }
  end
end
