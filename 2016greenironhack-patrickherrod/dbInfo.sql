drop table produce;

CREATE TABLE produce (
produce_id INT AUTO_INCREMENT,
produce_name VARCHAR(100) NOT NULL,
PRIMARY KEY (produce_id),
INDEX (produce_name)
);

INSERT INTO produce (produce_name) VALUES 
("apples"),
("berries"),
("blackberries"),
("blueberries"),
("cantaloupe"),
("cherries"),
("curants"),
("gooseberries"),
("grapes"),
("melons"),
("nectarines"),
("peaches"),
("pears"),
("plums"),
("raspberries"),
("strawberries"),
("tomatoes"),
("watermelon"),
("artichoke"),
("asparagus"),
("beans"),
("beets"),
("bell pepper"),
("broccoli"),
("brussels sprouts"),
("cabbage"),
("carrots"),
("cauliflower"),
("cilantro"),
("collard greens"),
("cucumber"),
("dill"),
("dill seeds"),
("eggplant"),
("garlic"),
("green peas"),
("herbs"),
("hot peppers"),
("kale"),
("kohlrabi"),
("lettuce"),
("leeks"),
("lima beans"),
("mushrooms"),
("mustard greens"),
("okra"),
("onions"),
("parsley"),
("parsnips"),
("potatoes"),
("pumpkin"),
("radish"),
("rhubarb"),
("snap bean"),
("spinach"),
("squash"),
("sweet corn"),
("sweet pepper"),
("sweet potato"),
("turnip"),
("turnip greens"),
("zucchini")
;

select * from produce;

drop table fruits;

CREATE TABLE fruits (
food_id INT NOT NULL,
food_name VARCHAR(100) NOT NULL,
jan CHAR NOT NULL,
feb CHAR NOT NULL,
mar CHAR NOT NULL,
apr CHAR NOT NULL,
may CHAR NOT NULL,
jun CHAR NOT NULL,
jul CHAR NOT NULL,
aug CHAR NOT NULL,
sep CHAR NOT NULL,
oct CHAR NOT NULL,
nov CHAR NOT NULL,
dcm CHAR NOT NULL,
PRIMARY KEY (food_id),
FOREIGN KEY (food_name) REFERENCES produce(produce_name),
FOREIGN KEY (food_id) REFERENCES produce(produce_id)
);

/*
Data from
Indiana (purdue): https://extension.purdue.edu/foodlink/foods.php?category=2&sort=asc
Illinois: https://www.agr.state.il.us/wherefreshis/whatsinseason.pdf
Ohio: https://ofbf.org/whats-in-season/
*/
insert into fruits (food_id, food_name, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dcm) values
(1, 'apples', 'M', 'M', 'M', 'M', 'M', 'S', 'S', 'S', 'S', 'S', 'S', 'M'),
(2, 'berries', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O', 'O'),
(3, 'blackberries', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O', 'O'),
(4, 'blueberries', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O', 'O'),
(5, 'cantaloupe', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O'),
(6, 'cherries', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'O', 'O', 'O', 'O', 'O'),
(7, 'curants', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'O', 'O', 'O', 'O', 'O'),
(8, 'gooseberries', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'O', 'O', 'O', 'O', 'O'),
(9, 'grapes', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O'),
(10, 'melons', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(11, 'nectarines', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(12, 'peaches', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O', 'O'),
(13, 'pears', 'S', 'M', 'M', 'M', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S'),
(14, 'plums', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O'),
(15, 'raspberries', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O', 'O'),
(16, 'strawberries', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O', 'O', 'O'),
(17, 'tomatoes', 'O', 'O', 'M', 'M', 'S', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(18, 'watermelon', 'M', 'M', 'M', 'M', 'M', 'M', 'S', 'S', 'S', 'S', 'M', 'M');

select * from fruits order by food_name;

drop table veggies;

CREATE TABLE veggies (
food_id INT NOT NULL,
food_name VARCHAR(100) NOT NULL,
jan CHAR NOT NULL,
feb CHAR NOT NULL,
mar CHAR NOT NULL,
apr CHAR NOT NULL,
may CHAR NOT NULL,
jun CHAR NOT NULL,
jul CHAR NOT NULL,
aug CHAR NOT NULL,
sep CHAR NOT NULL,
oct CHAR NOT NULL,
nov CHAR NOT NULL,
dcm CHAR NOT NULL,
PRIMARY KEY (food_id),
FOREIGN KEY (food_name) REFERENCES produce(produce_name),
FOREIGN KEY (food_id) REFERENCES produce(produce_id)
);

insert into veggies (food_id, food_name, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dcm) values
(19, 'artichoke', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'O', 'O', 'O', 'O'),
(20, 'asparagus', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O', 'O', 'O', 'O'),
(21, 'beans', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O', 'O'),
(22, 'beets', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'O'),
(23, 'bell pepper', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'O'),
(24, 'broccoli', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(25, 'brussels sprouts', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'O'),
(26, 'cabbage', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(27, 'carrots', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'O'),
(28, 'cauliflower', 'O', 'O', 'O', 'O', 'S', 'S', 'O', 'O', 'O', 'O', 'O', 'O'),
(29, 'cilantro', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(30, 'collard greens', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O', 'O', 'O', 'O'),
(31, 'cucumber', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O', 'O'),
(32, 'dill', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O'),
(33, 'dill seeds', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O', 'O'),
(34, 'eggplant', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O'),
(35, 'garlic', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S','S', 'S', 'O'),
(36, 'green peas', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O', 'O', 'O', 'O'),
(37, 'herbs', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'Oh'),
(38, 'hot peppers', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O'),
(39, 'kale', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O'),
(40, 'kohlrabi', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'),
(41, 'lettuce', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O', 'O', 'O', 'O', 'O'),
(42, 'leeks', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O', 'O', 'O'),
(43, 'lima beans', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'O', 'O'),
(44, 'mushrooms', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'O'),
(45, 'mustard greens', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(46, 'okra', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(47, 'onions', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'O'),
(48, 'parsley', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O'),
(49, 'parsnips', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'O', 'O'),
(50, 'potatoes', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O'),
(51, 'pumpkin', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'O', 'O'),
(52, 'radish', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'),
(53, 'rhubarb', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O', 'O', 'O', 'O'),
(54, 'snap bean', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(55, 'spinach', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'),
(56, 'squash', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O'),
(57, 'sweet corn', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(58, 'sweet pepper', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'O', 'O', 'O'),
(59, 'sweet potato', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S'),
(17, 'tomatoes', 'O', 'O', 'M', 'M', 'S', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(60, 'turnip', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'S', 'S', 'O', 'O'),
(61, 'turnip greens', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'O', 'O'),
(62, 'zucchini', 'O', 'O', 'O', 'O', 'S', 'S', 'S', 'S', 'S', 'S', 'O', 'O');

select food_id, food_name from produce, veggies where produce.produce_name = veggies.food_name AND produce.produce_id != veggies.food_id;

select * from veggies order by food_name;

drop table local_markets;

create table local_markets (
id int auto_increment PRIMARY KEY,
name varchar(64),
street varchar(100),
city varchar(64),
state varchar(2),
zip int,
lat float,
lng float,
webpage varchar(100),
notes varchar(64),
table_name varchar(100)
);

insert into local_markets (name, street, city, state, zip, lat, lng, webpage, notes, table_name) values 
("Historic Lafayette Farmers Market", "113 N 5th St", "Lafayette", "IN", 47901, 40.418707, -86.891854, "http://www.lafayettefarmersmarket.com", "Closed-off public street", "historic_lafayette_farmers_market"),
("Purdue Campus Farmers Market", "615 W State St", "West Lafayette", "IN", 47907, 40.424374, -86.914331, "http://www.purdue.edu/sustainability/initiatives/food/farmersmarket.html", "Memorial Mall", "purdue_campus_farmers_market"),
("West Lafayette Farmers Market", "3101 N Salisbury St", "West Lafayette", "IN", 47906, 40.462848, -86.916160, "http://wlfarmersmarket.com/", "Cumberland Park", "west_lafayette_farmers_market");

select * from local_markets;

drop table historic_lafayette_farmers_market;

create table historic_lafayette_farmers_market (
produce_id int not null primary key,
price float,
freshness float,
foreign key (produce_id) references produce(produce_id)
);

insert into historic_lafayette_farmers_market (produce_id, price, freshness) values ( 1, '2.00', '4.5');

select * from historic_lafayette_farmers_market;

select produce_name, price from produce, historic_lafayette_farmers_market
	where historic_lafayette_farmers_market.produce_id = produce.produce_id;

create table purdue_campus_farmers_market (
produce_id int not null primary key,
price float,
freshness float,
foreign key (produce_id) references produce(produce_id)
);

create table west_lafayette_farmers_market (
produce_id int not null primary key,
price float,
freshness float,
foreign key (produce_id) references produce(produce_id)
);
