SQL BOLT Excercise:

Excercise No: 01
SELECT title FROM movies;
SELECT director FROM movies;
SELECT title, director FROM movies;
SELECT title, year FROM movies;
SELECT * FROM movies;

Excercise No: 02
SELECT * FROM movies WHERE id=6;
SELECT * FROM movies WHERE year BETWEEN 2000 AND 2010;
SELECT * FROM movies WHERE year NOT BETWEEN 2000 AND 2010;
SELECT title, year FROM Movies WHERE id<6;

Excercise No: 03
SELECT title FROM movies WHERE title like "Toy%";
SELECT * FROM movies WHERE director= "John Lasseter";
SELECT * FROM movies WHERE director != "John Lasseter";
SELECT title FROM movies WHERE title like "WALL-%";

Excercise No: 04
SELECT DISTINCT director FROM movies ORDER BY director ASC;
SELECT * FROM Movies ORDER BY Year DESC LIMIT 4;
SELECT DISTINCT title FROM movies ORDER BY title ASC limit 5;
SELECT * FROM Movies ORDER BY Title ASC LIMIT 5 OFFSET 5;

Excercise No: 05
SELECT * FROM north_american_cities WHERE Country like "canada";
SELECT * FROM north_american_cities WHERE Country like "United States" ORDER BY Latitude DESC ;
SELECT * FROM north_american_cities WHERE Longitude  < -87.69 ORDER BY  Longitude ASC ;
SELECT * FROM north_american_cities WHERE country like "Mexico" order by population DESC limit 2 ;
SELECT * FROM north_american_cities WHERE country like "United States" order by population DESC limit 2 offset 2 ;

Excercise No: 06
SELECT Title, International_sales, Domestic_sales FROM Movies JOIN Boxoffice ON Id=Movie_id;
SELECT Title, International_sales, Domestic_sales FROM Movies JOIN Boxoffice ON Id=Movie_id WHERE International_sales > Domestic_sales;
SELECT Title, Rating FROM Movies JOIN Boxoffice ON Id=Movie_id ORDER BY Rating DESC;

Excercise No: 07
SELECT DISTINCT Building FROM Employees LEFT JOIN Buildings ON Building=Building_name WHERE Years_employed NOT NULL;
SELECT * FROM Buildings;
SELECT DISTINCT Building_name, Role  FROM Buildings LEFT JOIN employees ON building_name = building;

Excercise No: 08
SELECT * FROM Employees LEFT JOIN Buildings ON Building_name = Building WHERE Building IS NULL;
SELECT * FROM Buildings LEFT JOIN Employees ON Building_name = Building WHERE Building IS NULL;

Excercise No: 09
SELECT Title, (Domestic_sales + International_sales)/1000000 AS Total_Sales_Millions FROM Movies LEFT JOIN Boxoffice ON Id=Movie_Id;
SELECT Title, Rating*10 as Percent FROM Movies LEFT JOIN Boxoffice ON Id=Movie_Id;
SELECT Title, Year FROM Movies LEFT JOIN Boxoffice ON Id=Movie_Id WHERE Year % 2 = 0;

Excercise No: 10
SELECT MAX(Years_employed) FROM Employees;
SELECT Role, AVG(Years_Employed) FROM Employees GROUP BY Role;
SELECT Building, SUM(Years_Employed) FROM Employees GROUP BY Building;

Excercise No: 11
SELECT Role, COUNT(*) AS Number_of_Artists FROM Employees WHERE Role = "Artist";
SELECT Role, COUNT(*) FROM Employees GROUP BY Role;
SELECT Role, SUM(Years_Employed) FROM Employees GROUP BY Role HAVING Role = "Engineer";

Excercise No: 12
SELECT *, COUNT(Title) FROM Movies GROUP BY Director;
SELECT Director, sum(Domestic_sales + International_Sales) as Total_Sales FROM Movies LEFT JOIN Boxoffice ON Id = Movie_ID GROUP BY Director;

Excercise No: 13
INSERT INTO movies (id, title, director, year, length_minutes) VALUES (15, "Toy Story 4", "John Lasseter", 2017, 110 );
INSERT INTO boxoffice VALUES (4, 8.7, 340000000, 270000000);

Excercise No: 14
UPDATE movies SET director = "John Lasseter" WHERE title = "A Bug's Life";
UPDATE Movies SET Year = "1999" WHERE Id = 3;
UPDATE Movies SET Title = "Toy Story 3", Director = "Lee Unkrich" WHERE Id = 11;

Excercise No: 15
DELETE FROM Movies WHERE Year < 2005; 
DELETE FROM Movies WHERE Director = "Andrew Stanton";

Excercise No: 16
CREATE TABLE Database (Name TEXT,Version FLOAT,Download_Count INTEGER);

Excercise No: 17
ALTER TABLE Movies ADD COLUMN Aspect_ratio FLOAT DEFAULT 3;
ALTER TABLE Movies ADD COLUMN Language TEXT DEFAULT "English";

Excercise No: 18
DROP TABLE Movies;
DROP TABLE BoxOffice;
