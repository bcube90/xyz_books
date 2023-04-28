module ApiErrorHandler
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActionController::BadRequest, with: :render_bad_request
    rescue_from ActionController::RoutingError, with: :render_not_found_response
  end

  def render_not_found_response(exception)
    msg = exception.message.gsub(/\swith\s'id'=\d+/, '')
    msg = msg.gsub(/\s\[.+\]/, '')
    response = {
      data: {message: msg},
      status: 404
    }
    render json: response, status: :ok
  end

  def render_bad_request(exception)
    response = {
      message: exception.message,
      status: 400
    }
    render json: response, status: :ok
  end
end