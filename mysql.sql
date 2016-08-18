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

#inner join
select movies.title, promotions.name, promotions.category
from movies
inner join promotions
on movies.id = promotions.movie_id;

#innner join 3
select movies.title, genres.name
from movies
inner join movies_genres
on movies.id = movies_genres.movied_id
inner join genres
on movies_genres.genre_id = genres.id
where movies.title = "peter pan";

#join, order by and CHECK
SELECT MOvies.title, Rooms.id, Rooms.seats From Movies
INNER JOIN Rooms
ON Movies.id = Rooms.movie_id
WHERE Rooms.seats > 75
ORDER BY Rooms.seats DESC;

#3 joins and order by
SELECT Actors.name, Movies.title FROM Actors
INNER JOIN Actors_Movies
ON Actors.id = Actors_Movies.actor_id
INNER JOIN Movies
ON Movies.id = Actors_Movies.movie_id
ORDER BY Movies.title ASC;

#aliases
SELECT a.name, m.title FROM Actors a
INNER JOIN Actors_Movies am
ON a.id = am.actor_id
INNER JOIN Movies m
ON am.movie_id = m.id
ORDER BY m.title;

#Left outer join
SELECT m.title, r.id "Theatre Number" from Movies m
LEFT OUTER JOIN Rooms r
ON M.id = r.movied_id;

#Right outer JOIN
SELECT m.title, r.id "Theatre Number"
FROM Movies m
RIGHT OUTER JOIN Rooms r
ON m.id = r.movie_id;

#Subquery
SELECT id from Rooms WHERE seats >
(SELECT avg(seats) FROM Rooms);

#left outer join and Subquery
SELECT r.id, m.title FROM Rooms r
LEFT OUTER JOIN Movies m
ON m.id = r.movie_id
WHERE seats > (SELECT AVG(seats) FROM Rooms);
