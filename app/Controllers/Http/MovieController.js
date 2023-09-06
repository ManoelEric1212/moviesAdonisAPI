'use strict'
const Movie = use('App/Models/Movie')
class MovieController {
  async store({request, response}){
    const {title, description, duration} = request.all();
    const movie = await Movie.create({title, description, duration})
    return movie;
  }

  async update({request,response,params}){
    const {title, description, duration} = request.all();
    const movie = await Movie.find(params.id);
    if(!movie){
      return response.status(404).send({message: 'Movie not exists'})
    }
    movie.title = title;
    movie.description = description;
    movie.duration = duration;
    await movie.save();
    return movie;
  }

  async index({request,response}){
    const movies = await Movie.all();
    return movies;
  }
  async destroy({response,params}){
    const movie = await Movie.find(params.id);
    if(!movie){
      return response.status(404).send({message: 'Movie not exists'})
    }
    await movie.delete();
    return response.status(200).send({message: 'Movie has been deleted'})

  }
  
}

module.exports = MovieController
