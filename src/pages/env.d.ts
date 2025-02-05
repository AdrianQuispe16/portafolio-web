/// <reference path="../.astro/types.d.ts" />

type Job = {
    date: string;
    empresa: string;
    puesto: string;
    description: string;
    ruta: string,
    enlace: string,
}

type educacion = {
    date: string;
    escuela: string;
    carrera: string;
    description: string;
    ruta: string,
    enlace: string,
}

type skill = {
    url: string;
    nombre : string;
    porcentaje: string;
    width: string;
}