Prueba de codigo para NextJS

El propósito de esta prueba es evaluar tus habilidades mediante la implementación de un componente de búsqueda de películas utilizando las bibliotecas especificadas. Asegúrate de seguir las indicaciones detalladas a continuación y cumplir con los requisitos establecidos.
Herramientas y Recursos:
Themoviedb API:
Utilizaremos la API de Themoviedb para obtener información sobre las películas.
https://developer.themoviedb.org/reference/intro/getting-started
Librerías:
Asegúrate de utilizar las siguientes librerías en tu implementación:
- zod para los schemas del formulario.
- react-hook-form para gestionar el estado del formulario.
- shadcn para los componentes.
- zustand para almacenar de forma persistente el estado del formulario.
- nextjs
- tanstack para lograr un scroll infinito en los resultados de búsqueda.
Tarea:
[X] Implementa un input utilizando shadcn y react-hook-form. Este formulario debe validar el input utilizando un schema con zod, exigiendo un mínimo de 1 carácter y un máximo de 10 caracteres. En caso de error, se debe informar al usuario.

[X] Cuando el usuario introduce un valor válido, se debe realizar una petición con server actions de nextjs para obtener películas que coincidan con el input. Los resultados deben presentarse con un scroll infinito implementado mediante tanstack.

[X] Adicionalmente, utiliza zustand para almacenar de forma persistente tanto el valor del input como los resultados de la búsqueda, de manera que al recargar la página, los valores se mantengan.
Requisitos Específicos:
[X] Se debe utilizar TypeScript para toda la implementación.
[X] Todas las librerías mencionadas deben ser utilizadas en el proyecto.
[X] Asegúrate de que el código esté correctamente tipado en su totalidad.
[X] Se debe subir el proyecto a un repositorio público de Github

Recuerda que esta prueba no solo evalúa la funcionalidad, sino también la calidad del código y la capacidad para cumplir con los requisitos establecidos. ¡Buena suerte!
