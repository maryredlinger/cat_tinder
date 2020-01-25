class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats
    end

    def create
        cat = Cat.create(cat_params)
        if cat.valid?
            render json: cat
        else 
            render json: cat.errors, status: 422
        end
    end
    def cat_params
        params.require(:cat).permit(:name, :age, :city, :photo, :bio)
    end
end
