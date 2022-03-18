export interface Dashboard {
    status:         number,
    datos:           MovieInfo[],
}

export interface MovieInfo{
    idPelicula:     string,
    calificacion:   string,
    estreno:        string,
    genero:         string,
    nombre:         string,
    portada:        string
}