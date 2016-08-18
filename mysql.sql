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
