module ApiErrorHandler
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActionController::BadRequest, with: :render_bad_request
  end

  def render_not_found_response(exception)
    msg = exception.message.gsub(/\swith\s'id'=\d+/, '')
    msg = msg.gsub(/\s\[.+\]/, '')
    render json: { message: msg, status: 404 }, status: :not_found
  end

  def render_bad_request(exception)
    render json: { message: exception.message, status: 400 }, status: :bad_request
  end
end