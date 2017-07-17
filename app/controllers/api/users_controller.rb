class Api::UsersController < ApplicationController
  def create
    @user = User.new(params[:user])
    if @user.save
      login!(@user)
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
