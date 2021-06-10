/*
 * model entitie Planet   
*/
class Planet {
  constructor(data = {}) {
    this.nombre = data.name;
    this.diametro = data.diameter;
    this.periodoRotacion = data.rotation_period;
    this.periodoOrbital = data.orbital_period;
    this.gravedad = data.gravity;
    this.poblacion = data.population;
    this.clima = data.climate;
    this.terreno = data.terrain;
    this.superficieAgua = data.surface_water;
    this.residentes = data.residents;
    this.peliculas = data.films;
    this.url = data.url;
    this.creado = data.created;
    this.editado = data.edited;
  }
}

module.exports = Planet;
