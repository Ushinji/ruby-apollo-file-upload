# frozen_string_literal: true

if Rails.env.test?
  # Memo: https://github.com/carrierwaveuploader/carrierwave#testing-with-carrierwave
  CarrierWave.configure do |config|
    config.storage = :file
    config.enable_processing = false
  end
end
