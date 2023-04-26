class PagesController < ApplicationController
  def index
    case request.subdomain
    when "api"
      redirect_to root_url(subdomain: ""), allow_other_host: true
    end
  end
end
