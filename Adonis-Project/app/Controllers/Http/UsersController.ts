import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index ({}: HttpContextContract) {
    const user = User.all()

    return user;
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({ request }: HttpContextContract) {
    const data = request.only([
      'user',
      'senha'
    ]);

    const user = await User.create(data);

    return user;
  }

  public async show ({ params }: HttpContextContract) {

    const user = await User.findOrFail(params.id);

    return user;
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({ request, params}: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    const data = request.only([
      'user',
      'senha'
    ]);

    user.merge(data);

    await user.save();

    return user;
  }

  public async destroy ({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);

    user.delete();
  }
}
