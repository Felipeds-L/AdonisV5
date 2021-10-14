import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index ({}: HttpContextContract) {

    const posts = await Post.all();

    return posts;
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({ request }: HttpContextContract) {

    const data = request.only([
      'title',
      'content',
      'user_id'
    ]);

    const post = await Post.create(data);

    return post;
  }

  public async show ({ params }: HttpContextContract) {

    const post = await Post.findOrFail(params.id)

    return post;
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({ request, params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id);
    const data = request.only([
      'title',
      'content',
      'user_id'
    ]);

    post.merge(data);

    await post.save();

    return post;
  }

  public async destroy ({ params }: HttpContextContract) {

    const post = await Post.findOrFail(params.id);

    post.delete();
  }
}
