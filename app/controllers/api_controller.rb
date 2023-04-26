class ApiController < ApplicationController
  include ApiErrorHandler

  def index
    case request.subdomain
    when "api"
      respond_to do |format|
        format.html { raise ActionController::RoutingError.new "Bad" }
      end
    end
  end
end