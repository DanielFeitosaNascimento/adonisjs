 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';


export default class UsersController {
  public async create( { request, response } : HttpContextContract) {
    const { name, username, email } = request.only(["name", "username", "email"])


    const user =  await User.create({
        username,
        name,
        email,
      });

    return response.status(201).json(user);
  }

  public async index( { response } : HttpContextContract) {
    const allUsers = await User.all()

    return response.status(200).json(allUsers);
  }
}
