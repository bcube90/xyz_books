class ApiController < ApplicationController
  include ApiErrorHandler

  before_action :is_html?, only: [:index]

  private

  def is_html?
    if request.format == "text/html"
      redirect_to(pages_url(subdomain: ""), allow_other_host: true) and return
    end
  end
end