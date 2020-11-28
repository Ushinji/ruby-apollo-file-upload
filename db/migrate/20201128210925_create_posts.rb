# frozen_string_literal: true

class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :image, null: false
      t.string :display_name, null: false

      t.timestamps null: false
    end
  end
end
