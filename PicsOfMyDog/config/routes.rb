Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, default: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
