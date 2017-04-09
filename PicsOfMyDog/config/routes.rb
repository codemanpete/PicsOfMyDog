Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, default: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :photos, only: [:index]
      resources :pets, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :pets, only: [:create]
    resources :photos, only: [:create, :show, :index]
    resources :taggings, only: [:create]
  end
end
