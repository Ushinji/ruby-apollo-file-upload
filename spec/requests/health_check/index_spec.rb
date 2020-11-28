# frozen_string_literal: true

require "rails_helper"

describe "GET /api/health_check" do
  subject { get health_check_path }

  it "200を返すこと" do
    subject
    expect(response).to have_http_status(:ok)
  end
end
