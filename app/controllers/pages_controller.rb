class PagesController < ApplicationController
  def index
    logger.info "request: "
    logger.info request.format
    case request.subdomain
    when "api"
      redirect_to root_url(subdomain: ""), allow_other_host: true
    end
  end
end
