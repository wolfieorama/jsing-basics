#insert
INSERT INTO promotions (id, name, category)
VALUES (1, 'john', 'vu');

#not null and unique auto
CREATE TABLE Actors (
  name varchar(50) NOT NULL UNIQUE,
  country varchar(50)
);

#with a defined inique name
CREATE TABLE Movies (
  name varchar(50) NOT NULL,
  language varchar(50),
  CONSTRAINT name_lang UNIQUE(name, language)
);

#adding primary key
CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  country varchar(50)
);

#add a f key to an exisiting table
ALTER TABLE promotions
ADD CONSTRAINT fkey_movie
FOREIGN KEY (movie_id)
REFERENCES movies (id);

#FOREIGN key added

CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  country_id int REFERENCES countries(id)
);

#alternative to foreign key addition
CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  country_id int,
  CONSTRAINT myf_key FOREIGN KEY (country_id) REFERENCES Countries(id)
);

#CHECKs

CREATE TABLE Actors (
  id int PRIMARY KEY,
  name varchar(50) NOT NULL UNIQUE,
  salary integer CHECK (salary > 500),
  bonus integer CHECK (bonus < salary),
  country_id int REFERENCES Countries(id)
);

#join table
CREATE TABLE Actors_Movies (
  actor_id int REFERENCES Actors(id),
  movie_id int REFERENCES Movies(id)
);

#creating

CREATE TABLE Rooms (
  id int PRIMARY KEY,
  seats int,
  movie_id int UNIQUE,
  CONSTRAINT my_fkey FOREIGN KEY (movie_id) REFERENCES Movies (id)
);
