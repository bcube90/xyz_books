Rails.application.routes.draw do
  root "pages#index"

  constraints subdomain: ["", "www"] do
    match "*path", to: "pages#index", via: :get
    resources :pages, only: [:index]
  end

  namespace :api, defaults: { format: :json, subdomain: "api" } do
    resources :books, only: [:show]
  end
end
