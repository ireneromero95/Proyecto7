# Proyecto 7

Se trata de un proyecto backend que organiza videojuegos por plataformas y permite la creación de usuarios

## Features

- Crear, editar y eliminar videojuegos

Lo primero para poder comenzar a utilizar el proyecto es crear un usuario. Todo el mundo tiene acceso a la información de los videojuegos y de las plataformas, para ello se accede a través de:
 - http://localhost:3000/api/v1/juegos
 - http://localhost:3000/api/v1/plataformas

Para poder hacer cualquier tipo de modificacion (o al menos intentarlo) hay que estar registrado, para registrarse hay que hacerlo a través de:
 - http://localhost:3000/api/v1/users/register

Una vez registrado hay que iniciar sesión:
 - http://localhost:3000/api/v1/users/login

Los usuarios se crean directamente con rol de user, los user pueden subir juegos (aunque un admin  tiene que verificarlos) y eliminarse a sí mismos:
 - http://localhost:3000/api/v1/juegos
 - http://localhost:3000/api/v1/users/:id

Los admin pueden eliminar juegos, plataformas y usuarios, así como editarlos. Los admin pueden convertir en admin a los otros usuarios:
 - http://localhost:3000/api/v1/users/:id
 - http://localhost:3000/api/v1/juegos/:id
 - http://localhost:3000/api/v1/plataformas/:id

También pueden revisar los juegos que han subido los usuarios para verificarlos y que aparezcan en la página o no:

 - http://localhost:3000/api/v1/juegos/not-verified
 

Para eliminarse as í mismo un usario tiene que iniciar sesión y acceder a su perfil a través de:

 - http://localhost:3000/api/v1/users/a/:id
