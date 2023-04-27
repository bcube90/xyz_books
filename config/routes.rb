Rails.application.routes.draw do
  root "pages#index"
  
  constraints subdomain: "api", defaults: {format: :json} do
    namespace :api, path: "" do
      namespace :v1 do
        resources :books, only: [:show], subdomain: 'api'
      end
    end
    match "*unmatch", to: "api_controller#index", via: :get
  end

  constraints subdomain: ["", "www"] do
    resources :pages, only: [:index]
    match "*unmatch", to: "pages#index", via: :get, constraints: lambda{|request| request.format == "text/html"}
  end
end
