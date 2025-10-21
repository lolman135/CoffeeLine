
-- user info --
CREATE TABLE IF NOT EXISTS users(
	id UUID NOT NULL PRIMARY KEY, 
	name VARCHAR(50) NOT NULL, 
	email VARCHAR(100) NOT NULL,
	phone_number VARCHAR(15) NOT NULL,
	password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS roles(
	id UUID NOT NULL PRIMARY KEY,
	name VARCHAR(25) NOT NULL
);

-- coffe info --
CREATE TABLE IF NOT EXISTS categories(
	id UUID NOT NULL PRIMARY KEY,
	name VARCHAR(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS coffees(
	id UUID NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	description TEXT NOT NULL,
	price INT NOT NULL,
	image_url TEXT NOT NULL,
	category_id UUID NOT NULL,
	CONSTRAINT fk_coffee_category
		FOREIGN KEY (category_id)
		REFERENCES categories(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

-- order info --
CREATE TABLE IF NOT EXISTS orders(
	id UUID NOT NULL PRIMARY KEY,
	created_at TIMESTAMP NOT NULL,
	total_cost INT NOT NULL,
	status VARCHAR(20) NOT NULL,
	user_id UUID NOT NULL,
	CONSTRAINT fk_order_user
		FOREIGN KEY (user_id)
		REFERENCES users(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

-- many to many relation tables
CREATE TABLE IF NOT EXISTS users_roles(
	user_id UUID NOT NULL,
	role_id UUID NOT NULL,
	CONSTRAINT fk_user_id 
		FOREIGN KEY (user_id) 
		REFERENCES users(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	CONSTRAINT fk_role_id 
		FOREIGN KEY (role_id) 
		REFERENCES roles(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS order_items(
	id UUID NOT NULL PRIMARY KEY,
	order_id UUID NOT NULL,
	coffee_id UUID NOT NULL,
	quantity INT NOT NULL,
	CONSTRAINT fk_order_id
		FOREIGN KEY (order_id)
		REFERENCES orders(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	CONSTRAINT fk_coffee_id
		FOREIGN KEY (coffee_id)
		REFERENCES coffees(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
	CONSTRAINT uq_order_coffee
		UNIQUE(order_id, coffee_id)
);