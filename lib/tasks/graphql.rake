# frozen_string_literal: true

namespace :graphql do
  task dump_schema: :environment do
    schema_definition = AppSchema.to_definition
    schema_path = "schema.graphql"
    File.write(Rails.root.join(schema_path), schema_definition)
    puts "#{schema_path} updated."
  end
end
