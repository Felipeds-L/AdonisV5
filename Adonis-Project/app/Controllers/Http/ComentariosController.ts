import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comentario from 'App/Models/Comentario'
import Post from 'App/Models/Post';

export default class ComentariosController {
  public async index ({}: HttpContextContract) {

    const comentarios = await Comentario.all()

    return comentarios;
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({ request }: HttpContextContract) {
    const data = await request.only([
      'comentario',
      'autor',
      'post'
    ]);

    const comentario = await Comentario.create(data);

    return {created: true, comentario: comentario}
  }

  public async show ({ params }: HttpContextContract) {
    const comentario = await Comentario.findOrFail(params.id);

    return { comentario: comentario };
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({ request, params }: HttpContextContract) {
    const data = await request.only([
      'comentario'
    ]);

    const comentario = await Comentario.findOrFail(params.id);

    comentario.merge(data);

    await comentario.save();

    return {updated: true, comentario: comentario};
  }

  public async destroy ({params}: HttpContextContract) {

    const comentario = await Comentario.findOrFail(params.id);

    comentario.delete();
  }
}
