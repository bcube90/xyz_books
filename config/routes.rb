Rails.application.routes.draw do
  root "pages#index"

  resources :pages, only: [:index]

  namespace :api, defaults: { format: :json, subdomain: "api" } do
    resources :books, only: [:show]
  end
end
