<<<<<<< HEAD
create database agenda_db;

use agenda_db;
=======
create database agenda;

use agenda;
>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)

create table users(
	id int auto_increment primary key,
    name varchar(70) not null,
    email varchar(100) unique not null
<<<<<<< HEAD
);
=======
);

//alterei a partir daqui

create table contato 
(id int auto_increment primary key,
id_usuario int,
foreign key (id_usuario) references users(id),
telefone_celular varchar(9) not null,
telefone_recado varchar(9) null,
email varchar(50) not null unique,
endereco varchar(100));
>>>>>>> 0d41d0d (Atualizando a tarefa, incluindo busca por id)
